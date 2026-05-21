<?php
require_once 'bd.php';
header('Content-Type: application/json');

$titulo = $_GET['titulo'] ?? '';
$desc = $_GET['desc'] ?? '';
$hashtag = $_GET['hashtag'] ?? '';

// Construimos la consulta con LIKE para buscar coincidencias
$query = "SELECT * FROM Noticias WHERE titulo LIKE ? AND descripcion LIKE ?";
$params = ["%" . $titulo . "%", "%" . $desc . "%"];
$types = "ss";

// Si añades hashtags, la consulta cambiaría (punto D), pero por ahora esto cubre Título y Desc
$stmt = $mysqli->prepare($query);
$stmt->bind_param($types, ...$params);
$stmt->execute();
$resultado = $stmt->get_result();

$noticias = [];
while ($row = $resultado->fetch_assoc()) {
    $noticias[] = $row;
}

echo json_encode($noticias);
?>