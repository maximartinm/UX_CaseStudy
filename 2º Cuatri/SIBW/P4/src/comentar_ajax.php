<?php
session_start();
// comentar_ajax.php
require_once 'bd.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id_noticia = isset($_POST['id_noticia']) ? intval($_POST['id_noticia']) : 0;
    $nombre = $mysqli->real_escape_string($_POST['nombre']);
    $email = $mysqli->real_escape_string($_POST['email']);
    $texto = $mysqli->real_escape_string($_POST['texto']);

    if ($id_noticia > 0 && !empty($nombre) && !empty($texto) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $estado = $mysqli->prepare("INSERT INTO Comentarios (id_noticia, nombre, email, texto, fecha) VALUES (?, ?, ?, ?, NOW())");
        $estado->bind_param("isss", $id_noticia, $nombre, $email, $texto);
        
        if ($estado->execute()) {
            $id_nuevo = $mysqli->insert_id; //Cogemos el id nuevo.

            //P4
            $es_moderador = false;
            if (isset($_SESSION['rol']) && ($_SESSION['rol'] === 'moderador' || $_SESSION['rol'] === 'superusuario')) {
                $es_moderador = true;
            }
            //

            echo json_encode([
                'status' => 'success',
                'nombre' => $nombre,
                'texto' => $texto,
                'fecha' => date("d/m/Y, H:i:s"),
                'id' => $id_nuevo,
                'es_moderador' => $es_moderador
            ]);
        } else {
            echo json_encode(['status' => 'error', 'message' => $mysqli->error]);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Datos incompletos']);
    }
}
exit;
?>