<?php
session_start();
require_once 'bd.php';

// 1. Seguridad: Solo moderadores o superusuarios
if (!isset($_SESSION['rol']) || ($_SESSION['rol'] !== 'moderador' && $_SESSION['rol'] !== 'superusuario')) {
    echo json_encode(['status' => 'error', 'message' => 'No tienes permisos.']);
    exit;
}

//Recibir el id:
$id = isset($_POST['id']) ? intval($_POST['id']) : 0;

//Preparo la sentencia:
$sentencia = $mysqli->prepare("DELETE  FROM Comentarios WHERE id = ?");
$sentencia->bind_param("i", $id);

//Ejecuto
if($sentencia->execute()){
    echo json_encode(['status' => 'success']);
}else{
    echo json_encode(['status' => 'error', 'message' => 'No se pudo eliminar']);
}

?>

