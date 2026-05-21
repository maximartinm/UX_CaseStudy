<?php
session_start();
require_once '/usr/local/lib/php/vendor/autoload.php';
require_once 'bd.php';

// 1. Seguridad
if (!isset($_SESSION['rol']) || ($_SESSION['rol'] !== 'gestor' && $_SESSION['rol'] !== 'superusuario')) {
    die("Acceso denegado. Esta sección es solo para gestores.");
}

// 2. Cojo los parámetros de la URL
$id = isset($_GET['id']) ? intval($_GET['id']) : 0;
$origen = isset($_GET['origen']) ? $_GET['origen'] : 'panel';

// Inicializamos las variables vacías por defecto
$noticia = [
    'id' => 0,
    'titulo' => '',
    'tipo' => '',
    'descripcion' => ''
];
$imagenes_actuales = [];
$hashtags_texto = "";

// 3. SI EL ID ES MAYOR QUE 0, SÍ QUE CARGAMOS LOS DATOS (MODO EDICIÓN)
if ($id > 0) {
    $sentencia = $mysqli->prepare("SELECT * FROM Noticias WHERE id = ?");
    $sentencia->bind_param("i", $id);
    $sentencia->execute();
    $noticia_db = $sentencia->get_result()->fetch_assoc();

    if (!$noticia_db) {
        die("Error: la noticia solicitada no existe en la base de datos.");
    }
    
    // Sobrescribimos el array con los datos reales de la base de datos
    $noticia = $noticia_db;

    // 4. Obtener imágenes actuales para mostrarlas en el editor
    $sentencia_img = $mysqli->prepare("SELECT id, archivo, tipo_mime FROM Imagenes WHERE id_noticia = ?");
    $sentencia_img->bind_param("i", $id);
    $sentencia_img->execute();
    $res_img = $sentencia_img->get_result();

    while ($row = $res_img->fetch_assoc()) {
        $imagenes_actuales[] = [
            'id' => $row['id'], 
            'src' => "data:" . $row['tipo_mime'] . ";base64," . base64_encode($row['archivo'])
        ];
    }

    // NOTA: Aquí iría la consulta de los hashtags para el punto D
}

// 5. CARGAMOS TWIG
$loader = new \Twig\Loader\FilesystemLoader('/usr/local/lib/php/templates/plantillas');
$twig = new \Twig\Environment($loader);

// 6. RENDERIZAMOS LA PLANTILLA
echo $twig->render('editor_noticia.html', [
    'sesion' => $_SESSION,
    'noticia' => $noticia, // Si el id es 0, viaja con campos vacíos y no rompe Twig
    'origen' => $origen,
    'imagenes_actuales' => $imagenes_actuales,
    'hashtags_texto' => $hashtags_texto
]);
?>