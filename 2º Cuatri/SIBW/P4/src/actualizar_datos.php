<?php
session_start();
require_once 'bd.php'; // Tu conexión a la base de datos

// 1. Recogemos los datos (El ID siempre de la sesión)
$id = $_SESSION['id'];
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$password = $_POST['password'];

// 2. Comprobamos si la contraseña viene vacía o no
if (empty($password)) {
    // Si viene vacía, actualizamos solo nombre y email
    $sentencia = $mysqli->prepare("UPDATE Usuarios SET nombre = ?, email = ? WHERE id = ?");
    $sentencia->bind_param("ssi", $nombre, $email, $id);
} else {
    // Si ha escrito algo, la encriptamos y actualizamos todo
    $hash = password_hash($password, PASSWORD_DEFAULT);
    $sentencia = $mysqli->prepare("UPDATE Usuarios SET nombre = ?, email = ?, password = ? WHERE id = ?");
    $sentencia->bind_param("sssi", $nombre, $email, $hash, $id);
}

// 3. Ejecutamos y respondemos
if ($sentencia->execute()) {
    $_SESSION['nombre'] = $nombre; // Actualizamos para que Twig vea el cambio rápido
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'No se pudo actualizar']);
}
?>