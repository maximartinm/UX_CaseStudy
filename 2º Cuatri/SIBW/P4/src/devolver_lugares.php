<?php
// devolver lugares.php
require_once 'bd.php';

// Indicamos al navegador que lo que viene es un JSON
header('Content-Type: application/json');

$res = $mysqli->query("SELECT nombre FROM Lugares");
$lugares = [];

while ($row = $res->fetch_assoc()) {
    $lugares[] = $row['nombre'];
}

// Convertimos el array de PHP a un objeto JSON
echo json_encode($lugares, JSON_PRETTY_PRINT);
exit;
?>