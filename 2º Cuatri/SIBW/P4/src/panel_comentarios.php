<?php
session_start();
require_once '/usr/local/lib/php/vendor/autoload.php';
require_once 'bd.php';

// CARGAR TWIG
$loader = new \Twig\Loader\FilesystemLoader('/usr/local/lib/php/templates/plantillas');
$twig = new \Twig\Environment($loader);

// 1. SEGURIDAD: Solo moderadores y superusuarios
if (!isset($_SESSION['rol']) || ($_SESSION['rol'] !== 'moderador' && $_SESSION['rol'] !== 'superusuario')) {
    die("Acceso denegado. Esta sección es solo para moderadores.");
}

// obtengo todos los comentarios: 
$sentencia = $mysqli->prepare("SELECT * FROM Comentarios ORDER BY fecha DESC");
$sentencia->execute();
$res = $sentencia->get_result();

$comentarios = [];
while ($row = $res->fetch_assoc()) {
    $comentarios[] = $row;
}

echo $twig->render('panel_comentarios.html',[
    'sesion' => $_SESSION,
    'comentarios' => $comentarios

]);

?>