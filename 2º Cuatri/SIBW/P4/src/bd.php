<?php
// bd.php

$host = "db";             // Nombre del servicio en docker-compose
$user = "sibw_user";      // Valor de MYSQL_USER
$pass = "sibw_password";  // Valor de MYSQL_PASSWORD
$db   = "sibw_db";        // Valor de MYSQL_DATABASE

$mysqli = new mysqli($host, $user, $pass, $db);

// Comprobamos la conexión
if ($mysqli->connect_error) {
    die("Error de conexión (" . $mysqli->connect_errno . "): " . $mysqli->connect_error);
}

// Opcional: Forzar UTF-8 para que las tildes se vean bien
$mysqli->set_charset("utf8mb4");
?>