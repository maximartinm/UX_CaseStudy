<?php
session_start();
require_once '/usr/local/lib/php/vendor/autoload.php';
require_once 'bd.php';

if (!isset($_SESSION['rol']) || ($_SESSION['rol'] !== 'moderador' && $_SESSION['rol'] !== 'superusuario')) {
    echo json_encode(['status' => 'error', 'message' => 'No tienes permisos.']);
    exit;
}

//Confirmo que vengo del FORM post
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    //Guardo los datos del form:
    $id = isset($_POST['id']) ? intval($_POST['id']) : 0;
    $texto_nuevo = isset($_POST['texto']) ? trim($_POST['texto']) : '';

    //Si hay id y texto actualizamos:
    if($id > 0 && !empty($texto_nuevo)){
        $sentencia = $mysqli->prepare("UPDATE Comentarios SET texto = ?, editado_por_moderador = 1 WHERE id = ?");
        $sentencia->bind_param("si", $texto_nuevo, $id);

        if($sentencia->execute()){
            // Recogemos el origen y el ID de la noticia que venían ocultos en el formulario
            $origen = isset($_POST['origen']) ? $_POST['origen'] : 'panel';
            $id_noticia = isset($_POST['id_noticia']) ? intval($_POST['id_noticia']) : 0;

            // Decidimos la redirección según el origen
            if ($origen === 'noticia' && $id_noticia > 0) {
                header("Location: noticia.php?id=" . $id_noticia);
            } else {
                header("Location: panel_comentarios.php");
            }
            exit;
        }else{
            die("Error al actualizar el comentario");
        }
    }else{
        die("Datos incompletos");
    }

}


?>