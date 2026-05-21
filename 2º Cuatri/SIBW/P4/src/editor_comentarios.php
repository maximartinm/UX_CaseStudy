<?php
session_start();
require_once '/usr/local/lib/php/vendor/autoload.php';
require_once 'bd.php'; 

// 1. SEGURIDAD: Expulsar a quien no sea moderador o superusuario
if (!isset($_SESSION['rol']) || ($_SESSION['rol'] !== 'moderador' && $_SESSION['rol'] !== 'superusuario')) {
    die("Acceso denegado. No tienes permisos para editar comentarios.");
}

//COgemos el ID del comentario:
$id = isset($_GET['id']) ? intval($_GET['id']) : 0;

if ($id <= 0) {
    die("ID de comentario no válido");
}


//Sentencia de obtención del comentario:
$sentencia = $mysqli->prepare("SELECT * FROM Comentarios WHERE id = ?");
$sentencia->bind_param("i", $id);
$sentencia->execute();
$res = $sentencia->get_result();

$comentario = $res->fetch_assoc();

//Vemos que exista
if(!$comentario)
    die("Error : el comentario no existe");

//Cargamos .twig
$loader = new \Twig\Loader\FilesystemLoader('/usr/local/lib/php/templates/plantillas');
$twig = new \Twig\Environment($loader);


// Recogemos el origen de la URL (si no viene, por defecto es panel)
$origen = isset($_GET['origen']) ? $_GET['origen'] : 'panel';
$id_noticia = isset($_GET['id_noticia']) ? intval($_GET['id_noticia']) : 0;

echo $twig->render('editor_comentarios.html', [
    'sesion'     => $_SESSION,
    'comentario' => $comentario,
    'origen'     => $origen,
    'id_noticia' => $id_noticia
]);

?>
    