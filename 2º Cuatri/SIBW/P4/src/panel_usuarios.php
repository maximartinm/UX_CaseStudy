<?php
session_start();
require_once '/usr/local/lib/php/vendor/autoload.php';
require_once 'bd.php';

//Crgo TWIG
$loader = new \Twig\Loader\FilesystemLoader('/usr/local/lib/php/templates/plantillas');
$twig = new \Twig\Environment($loader);

//Seguridad
if (!isset($_SESSION['rol']) || ($_SESSION['rol'] !== 'superusuario')) {
    die("Acceso denegado. Esta sección es solo para superusuarios.");
}

//Obtengo todos los usuarios:
$sentencia = $mysqli->prepare("SELECT * FROM Usuarios");
$sentencia->execute();
$res = $sentencia->get_result();

$usuarios = [];
while ($row = $res->fetch_assoc()) {
    $usuarios[] = $row;
}

//Renderizamos la plantilla
echo $twig->render('panel_usuarios.html', [
    'usuarios' => $usuarios,
    'sesion' => $_SESSION
]);

?>

?>