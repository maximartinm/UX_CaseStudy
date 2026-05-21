<?php
session_start();
require_once 'bd.php'; // Asegúrate de que este archivo no tiene espacios en blanco antes de <?php

// Le decimos al navegador que vamos a responder con JSON
header('Content-Type: application/json');

// 1. Seguridad
if (!isset($_SESSION['rol']) || ($_SESSION['rol'] !== 'gestor' && $_SESSION['rol'] !== 'superusuario')) {
    echo json_encode(['status' => 'error', 'message' => 'No tienes permisos.']);
    exit;
}

// 2. Cojo los datos del formulario 
$titulo = $_POST['titulo'] ?? '';
$descripcion = $_POST['descripcion'] ?? '';
$tipo = $_POST['tipo'] ?? '';

// Variables por defecto para rellenar los campos de tu tabla
$fecha = date('Y-m-d'); 
$concejalia = 'General'; // Valor por defecto
$personas = '';          // Valor por defecto
$id_lugar = 1;           // OJO: Tiene que ser un ID numérico que exista en tu tabla Lugares

if (empty($titulo) || empty($descripcion)) {
    echo json_encode(['status' => 'error', 'message' => 'El título y la descripción son obligatorios.']);
    exit;
}

// Empezamos la zona de riesgo (Base de datos) con un try-catch
try {
    // 3. CREAR LA NOTICIA EN LA BD (Con las columnas exactas de tu tabla)
    $query = "INSERT INTO Noticias (titulo, tipo, descripcion, fecha, concejalia, personas, id_lugar) VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = $mysqli->prepare($query);
    
    // "ssssssi" significa: 6 textos (String) y 1 número (Integer para el id_lugar)
    $stmt->bind_param("ssssssi", $titulo, $tipo, $descripcion, $fecha, $concejalia, $personas, $id_lugar);
    $stmt->execute();
    
    // Atrapamos el ID nuevo
    $nuevo_id_noticia = $mysqli->insert_id;

    // 4. SUBIR LAS IMÁGENES (Asociadas al nuevo ID)
    if (!empty($_FILES['imagenes']['name'][0])) {
        $total_archivos = count($_FILES['imagenes']['name']);
        
        for ($i = 0; $i < $total_archivos; $i++) {
            if ($_FILES['imagenes']['error'][$i] === UPLOAD_ERR_OK) {
                $img_tmp = $_FILES['imagenes']['tmp_name'][$i];
                $tipo_mime = $_FILES['imagenes']['type'][$i];
                $img_data = file_get_contents($img_tmp);
                
                $ins_img = $mysqli->prepare("INSERT INTO Imagenes (id_noticia, archivo, tipo_mime, ruta, es_portada) VALUES (?, ?, ?, '', 0)");
                
                if ($ins_img) {
                    $ins_img->bind_param("iss", $nuevo_id_noticia, $img_data, $tipo_mime); 
                    $ins_img->execute();
                }
            }
        }
    }

    // 5. ÉXITO
    echo json_encode(['status' => 'success']);

} catch (Exception $e) {
    // Si la base de datos se queja de algo, lo atrapamos aquí y NO rompemos el JSON
    echo json_encode(['status' => 'error', 'message' => 'Error de Base de Datos: ' . $e->getMessage()]);
}
?>