<?php
session_start();

if (! isset($_SESSION['id'])) {
    $usuario = "";
} else {
    $usuario = [
        'id' => $_SESSION['id'],
        'nombre' => $_SESSION['nombre'],
        'rol' => $_SESSION['rol'],
        'email' => $_SESSION['email']
    ];
}

echo json_encode($usuario);

?>