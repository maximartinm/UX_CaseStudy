<?php
session_start();
require_once '/usr/local/lib/php/vendor/autoload.php';
require_once 'bd.php'; 

// Configuración de Twig
$loader = new \Twig\Loader\FilesystemLoader('/usr/local/lib/php/templates/plantillas');
$twig = new \Twig\Environment($loader);

//  Obtener y validar el ID de la noticia
$id = isset($_GET['id']) ? intval($_GET['id']) : 0;

if ($id <= 0) {
    die("ID de noticia no válido");
}

//  Obtener datos de la Noticia
$sentencia = $mysqli->prepare("SELECT n.*, l.nombre as lugar FROM Noticias n JOIN Lugares l ON n.id_lugar = l.id WHERE n.id = ?");
$sentencia->bind_param("i", $id); //el tipo de elemento
$sentencia->execute(); //ejecutamos
$noticia = $sentencia->get_result()->fetch_assoc();

if (!$noticia) { 
    die("La noticia solicitada no existe en la base de datos."); 
}

//  Obtener Imágenes de la noticia
$sentencia_img = $mysqli->prepare("SELECT archivo, tipo_mime FROM Imagenes WHERE id_noticia = ?");
$sentencia_img->bind_param("i", $id);
$sentencia_img->execute();
$res_img = $sentencia_img->get_result();

$imagenes = [];
while ($row = $res_img->fetch_assoc()) {
    $imagenes[] = [
        'src' => "data:" . $row['tipo_mime'] . ";base64," . base64_encode($row['archivo'])
    ];
}

//  Obtener los Comentarios
$sentencia_com = $mysqli->prepare("SELECT id, nombre, texto, fecha, editado_por_moderador FROM Comentarios WHERE id_noticia = ? ORDER BY fecha DESC");
$sentencia_com->bind_param("i", $id);
$sentencia_com->execute();
$res_com = $sentencia_com->get_result();

$comentarios = [];
while ($row = $res_com->fetch_assoc()) {
    $comentarios[] = $row;
}

//P4
$datos_sesion = isset($_SESSION['id']) ? $_SESSION : false;


//  Renderizar la plantilla
echo $twig->render('noticia.html', [
    'noticia'     => $noticia,
    'imagenes'    => $imagenes,
    'comentarios' => $comentarios,
    'sesion' => $datos_sesion //P4
]);
?>