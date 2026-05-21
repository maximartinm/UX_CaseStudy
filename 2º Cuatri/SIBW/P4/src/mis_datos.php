<?php
session_start();
require_once '/usr/local/lib/php/vendor/autoload.php';
require_once 'bd.php'; 

$loader = new \Twig\Loader\FilesystemLoader('/usr/local/lib/php/templates/plantillas');
$twig = new \Twig\Environment($loader);

//Obtengo el id de la sesion:
$id = isset($_SESSION['id']) ? $_SESSION['id'] : 0;

if($id <= 0)
    die("ID de usuario invalido");

//Cojo los datos del usuario
$sentencia = $mysqli->prepare("SELECT nombre, email, rol FROM Usuarios WHERE id = ?");
$sentencia->bind_param("i", $id);
$sentencia->execute();
$res = $sentencia->get_result();

$usuario = [];

if($res->num_rows === 1){
    $usuario = $res->fetch_assoc();
    
}else{
    die("Usuario no encontrado");
}

echo $twig->render('mis_datos.html', [
    'usuario' => $usuario,
    'sesion' => $_SESSION
]);

?>