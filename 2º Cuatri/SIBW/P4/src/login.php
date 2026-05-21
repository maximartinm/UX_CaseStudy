<?php
require_once '/usr/local/lib/php/vendor/autoload.php';
require_once 'bd.php';

session_start();

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $email_teclado = $_POST['email'];
    $password_teclado = $_POST['password'];

    // 1º saco la consulta que tenga tenga nombre y email.
    $estado = $mysqli->prepare("SELECT id, nombre, email, password, rol FROM Usuarios WHERE  email = ?");
    //2º Ahora cambiamos el nombre y el email por strings:
    $estado->bind_param("s",  $email_teclado);
    //3º Lanzo la consulta a la BD:
    $estado->execute();
    // 4º Guardo el resultado
    $res = $estado->get_result();

    if($res->num_rows === 1){ // Solo debe de haber un usuario con esos datos.
        $usuario = $res->fetch_assoc(); // cogemos sus datos.

        //Compruebo la contraseña 
        if(password_verify($password_teclado, $usuario['password'])){
            //Guardamos para la sesion:
            $_SESSION['id'] = $usuario['id'];
            $_SESSION['nombre'] = $usuario['nombre'];
            $_SESSION['email'] = $usuario['email'];
            $_SESSION['rol'] = $usuario['rol'];
            $_SESSION['anonimo'] = false;

            //Volvemos al portada que cambiara:
            echo json_encode(['status' => 'success']);
            exit();
        }else{
            echo json_encode(['status' => 'error', 'message' => 'Contraseña incorrecta']);
        }
    }else{
        echo json_encode(['status' => 'error', 'message' => 'Datos incompletos']);
    }

}


?>