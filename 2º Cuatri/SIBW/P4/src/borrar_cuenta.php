<?php
session_start();

// 1. Seguridad: Comprobar que hay alguien logueado
if (!isset($_SESSION['id'])) {
    echo json_encode(['status' => 'error', 'message' => 'No tienes permiso.']);
    exit;
}

require_once 'bd.php'; // Tu conexión

$id = $_SESSION['id'];

// 2. Preparamos el borrado
$sentencia = $mysqli->prepare("DELETE FROM Usuarios WHERE id = ?");
$sentencia->bind_param("i", $id);

// 3. Ejecutamos y comprobamos
if ($sentencia->execute()) {
    // Si se borró de la BD con éxito, destruimos la sesión de PHP
    session_unset();
    session_destroy();
    
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'No se pudo eliminar la cuenta.']);
}
?>