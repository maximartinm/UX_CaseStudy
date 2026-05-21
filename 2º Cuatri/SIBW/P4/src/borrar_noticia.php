<?php
session_start();
require_once 'bd.php';

header('Content-Type: application/json');

if (!isset($_SESSION['rol']) || ($_SESSION['rol'] !== 'gestor' && $_SESSION['rol'] !== 'superusuario')) {
    echo json_encode(['status' => 'error', 'message' => 'No tienes permisos.']);
    exit;
}

$id = isset($_POST['id']) ? intval($_POST['id']) : 0;

if ($id <= 0) {
    echo json_encode(['status' => 'error', 'message' => 'ID de noticia no válido o no recibido.']);
    exit;
}

// 1. PRIMER PASO: Borrar todos los comentarios asociados a esta noticia
$del_comentarios = $mysqli->prepare("DELETE FROM Comentarios WHERE id_noticia = ?");
$del_comentarios->bind_param("i", $id);
$del_comentarios->execute();

// 2. SEGUNDO PASO: Borrar todas las imágenes asociadas a esta noticia
$del_imagenes = $mysqli->prepare("DELETE FROM Imagenes WHERE id_noticia = ?");
$del_imagenes->bind_param("i", $id);
$del_imagenes->execute();

// 3. TERCER PASO (El Final): Ahora que está "limpia", borramos la noticia
$sentencia = $mysqli->prepare("DELETE FROM Noticias WHERE id = ?");
$sentencia->bind_param("i", $id);

if($sentencia->execute()){
    if ($sentencia->affected_rows > 0) {
        echo json_encode(['status' => 'success']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'La noticia no existe o ya había sido eliminada.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Error de MySQL: ' . $mysqli->error]);
}
?>