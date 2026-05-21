<?php
session_start();
require_once 'bd.php';

//Que se sepa que es JSON
header('Content-Type: application/json');

//recojo la palabra:
$palabra = isset($_POST['buscar']) ? $_POST['buscar'] : '';

//pongo los parámetros:
$parametro = "%".$palabra."%";

//preparo la sentencia:
$sentencia = $mysqli->prepare("SELECT * FROM Comentarios WHERE texto LIKE ? OR nombre LIKE ? OR id_noticia like ? ORDER BY fecha DESC");
$sentencia->bind_param("sss", $parametro, $parametro, $parametro);
$sentencia->execute();
$res = $sentencia->get_result();

$comentarios_encontrados = [];
while ($row = $res->fetch_assoc()) {
    $comentarios_encontrados[] = $row;
}

echo json_encode($comentarios_encontrados);

?>




