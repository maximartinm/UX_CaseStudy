<?php
require_once '/usr/local/lib/php/vendor/autoload.php';
require_once 'bd.php'; 

//Obtengo los datos:
$nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';
$password_encriptada = password_hash($password, PASSWORD_DEFAULT);
$rol = "registrado";


//Voy a ver si existe ese correo en la BD:
$estado = $mysqli->prepare("SELECT id, nombre, email, password, rol FROM Usuarios WHERE email = ?");
$estado->bind_param("s", $email);
$estado->execute();
$res = $estado->get_result();

if($res->num_rows === 1){
    $usuario = $res->fetch_assoc();
    json_encode(['status' => 'error', 'message' => 'El usuario ya existe']);
}else{
    //Preparo para insertar
    $sentencia = $mysqli->prepare("INSERT INTO Usuarios (nombre, email, password, rol) VALUES (?, ?, ?, ?)");
    $sentencia->bind_param("ssss", $nombre, $email, $password_encriptada, $rol);

    if ($sentencia->execute()) {
        // Logueo automático tras el éxito
        session_start();
        $_SESSION['id'] = $mysqli->insert_id; // El ID que acaba de crear la BD
        $_SESSION['nombre'] = $nombre;
        $_SESSION['rol'] = $rol;

        echo json_encode(['status' => 'success']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Error al guardar']);
    }
}

?>


