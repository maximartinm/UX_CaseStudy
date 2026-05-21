<?php
session_start();
require_once '/usr/local/lib/php/vendor/autoload.php';
require_once 'bd.php';

//Cargo TWIG
$loader = new \Twig\Loader\FilesystemLoader('/usr/local/lib/php/templates/plantillas');
$twig = new \Twig\Environment($loader);

//Seguridad del gestor y superusuario
if (!isset($_SESSION['rol']) || ($_SESSION['rol'] !== 'gestor' && $_SESSION['rol'] !== 'superusuario')) {
    die("Acceso denegado. Esta sección es solo para gestores.");
}

//Obtengo todos las Noticias
$sentencia = $mysqli->prepare("SELECT * FROM Noticias ORDER BY fecha DESC");
$sentencia->execute();
$res = $sentencia->get_result();

$noticias = [];
while ($row = $res->fetch_assoc()) {
    $noticias[] = $row;
}

// Renderizamos la plantilla
echo $twig->render('panel_noticias.html', [
    'noticias' => $noticias,
    'sesion' => $_SESSION
]);

?>