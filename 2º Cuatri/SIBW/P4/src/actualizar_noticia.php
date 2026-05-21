<?php
session_start();
require_once '/usr/local/lib/php/vendor/autoload.php';
require_once 'bd.php';

// PARA que responda JSON
header('Content-Type: application/json');

// Seguridad
if (!isset($_SESSION['rol']) || ($_SESSION['rol'] !== 'gestor' && $_SESSION['rol'] !== 'superusuario')) {
    echo json_encode(['status' => 'error', 'message' => 'No tienes permisos.']);
    exit;
}

// Cojo los datos que ya hay (¡PUNTO Y COMA ARREGLADO!)
$id = isset($_POST['id_noticia']) ? intval($_POST['id_noticia']) : 0;
$titulo = isset($_POST['titulo']) ? $_POST['titulo'] : '';
$descripcion = isset($_POST['descripcion']) ? $_POST['descripcion'] : '';
$tipo = $_POST['tipo'] ?? '';

if ($id <= 0 || empty($titulo) || empty($descripcion)) {
    echo json_encode(['status' => 'error', 'message' => 'Faltan campos obligatorios o el ID no es válido.']);
    exit;
}

// 3. ACTUALIZAR LOS TEXTOS DE LA NOTICIA
$stmt = $mysqli->prepare("UPDATE Noticias SET titulo = ?, tipo = ?, descripcion = ? WHERE id = ?");
$stmt->bind_param("sssi", $titulo, $tipo, $descripcion, $id);

if (!$stmt->execute()) {
    echo json_encode(['status' => 'error', 'message' => 'Fallo al actualizar la noticia: ' . $mysqli->error]);
    exit;
}

// 4. BORRAR LAS IMÁGENES MARCADAS
if (!empty($_POST['borrar_fotos'])) {
    foreach ($_POST['borrar_fotos'] as $id_foto) {
        $id_foto = intval($id_foto);
        $del_img = $mysqli->prepare("DELETE FROM Imagenes WHERE id = ? AND id_noticia = ?");
        $del_img->bind_param("ii", $id_foto, $id);
        $del_img->execute();
    }
}

// 5. SUBIR NUEVAS IMÁGENES
// 5. SUBIR NUEVAS IMÁGENES
if (!empty($_FILES['imagenes']['name'][0])) {
    $total_archivos = count($_FILES['imagenes']['name']);
    
    for ($i = 0; $i < $total_archivos; $i++) {
        if ($_FILES['imagenes']['error'][$i] === UPLOAD_ERR_OK) {
            $img_tmp = $_FILES['imagenes']['tmp_name'][$i];
            $tipo_mime = $_FILES['imagenes']['type'][$i];
            $img_data = file_get_contents($img_tmp);
            
            // EL CAMBIO ESTÁ AQUÍ: Añadimos ruta (vacía) y es_portada (0 = no) para que encaje con tu tabla
            $ins_img = $mysqli->prepare("INSERT INTO Imagenes (id_noticia, archivo, tipo_mime, ruta, es_portada) VALUES (?, ?, ?, '', 0)");
            
            // ESCUDO ANTI-CRASHEOS: Si la consulta falla por cualquier cosa, lo atrapamos antes del bind_param
            if (!$ins_img) {
                echo json_encode(['status' => 'error', 'message' => 'Error interno de SQL al preparar la imagen: ' . $mysqli->error]);
                exit;
            }

            $ins_img->bind_param("iss", $id, $img_data, $tipo_mime); 
            
            // Comprobamos si MySQL rechaza la imagen al ejecutar
            if (!$ins_img->execute()) {
                echo json_encode(['status' => 'error', 'message' => 'Error al guardar la imagen en la BD: ' . $mysqli->error]);
                exit;
            }
        }
    }
}

// 6. ÉXITO
echo json_encode(['status' => 'success']);
?>