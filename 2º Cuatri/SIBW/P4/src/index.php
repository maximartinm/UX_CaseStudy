<?php
session_start();

require_once '/usr/local/lib/php/vendor/autoload.php'; // Ruta fija en el contenedor 
require_once 'bd.php';

// Esta es la ruta donde Docker monta tu carpeta 'templates' 
$loader = new \Twig\Loader\FilesystemLoader('/usr/local/lib/php/templates/plantillas'); 
$twig = new \Twig\Environment($loader); // El cache lo añadire cuadno este acabada.

// Consulta que trae la noticia y LA imagen de portada

$res = $mysqli->query("SELECT n.id, n.titulo, n.fecha, n.descripcion, 
    (SELECT archivo FROM Imagenes WHERE id_noticia = n.id AND es_portada = 1 LIMIT 1) as archivo, 
    (SELECT tipo_mime FROM Imagenes WHERE id_noticia = n.id AND es_portada = 1 LIMIT 1) as tipo_mime 
    FROM Noticias n"); // Cambiar a archivo conexiones

$noticias = [];

//vemos que no falle.
if ($res) {
    //Extraemos cda fila de la consulta, como un array asociativo.
    while ($row = $res->fetch_assoc()) {
        //veo si la noticia tiene una imagen asociada en la tabla de imagenes.
        if (!empty($row['archivo'])) {
            $foto_b64 = base64_encode($row['archivo']); //Convierte los datos binarios
            $row['foto_src'] = "data:" . $row['tipo_mime'] . ";base64," . $foto_b64;
        } else {
            // Si no has elegido ninguna, ponemos el logo por defecto
            $row['foto_src'] = "img/luzerner_zeitung_sin_fondo.png";
        }
        $noticias[] = $row;
    }
}

// Cerramos la conexión 
$mysqli->close(); 

// Miramos si hay sesión iniciada. Si la hay, la guardamos. Si no, false.
$datos_sesion = isset($_SESSION['id']) ? $_SESSION : false;
// Renderizamos la plantilla enviando el array de noticias 
echo $twig->render('portada.html', [
    'noticias' => $noticias,
    'sesion' => $datos_sesion
    ]); 
?>
