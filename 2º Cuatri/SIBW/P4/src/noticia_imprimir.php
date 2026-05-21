<?php
require_once '/usr/local/lib/php/vendor/autoload.php'; // 
require_once 'bd.php'; // 

// Ruta absoluta del contenedor para Twig 
$loader = new \Twig\Loader\FilesystemLoader('/usr/local/lib/php/templates/plantillas');
$twig = new \Twig\Environment($loader);

$id = isset($_GET['id']) ? intval($_GET['id']) : 0; // 

// Consulta con JOIN 
$estado = $mysqli->prepare("SELECT n.*, l.nombre as lugar FROM Noticias n JOIN Lugares l ON n.id_lugar = l.id WHERE n.id = ?");
$estado->bind_param("i", $id); //
$estado->execute();
$noticia = $estado->get_result()->fetch_assoc(); // 

if (!$noticia) {
    die("Noticia no encontrada");
}

// Sacamos las imágenes 
$sentencia_img = $mysqli->prepare("SELECT archivo, tipo_mime FROM Imagenes WHERE id_noticia = ?");
$sentencia_img->bind_param("i", $id);
$sentencia_img->execute();
$res_img = $sentencia_img->get_result();

$imagenes = [];
while ($row = $res_img->fetch_assoc()) {
    $imagenes[] = [
        'src' => "data:" . $row['tipo_mime'] . ";base64," . base64_encode($row['archivo']) // 
    ];
}

// Renderizamos la plantilla de imprimir 
echo $twig->render('noticia_imprimir.html', [
    'noticia' => $noticia,
    'imagenes' => $imagenes
]);
?>
