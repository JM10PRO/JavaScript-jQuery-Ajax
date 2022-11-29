<?php

$username = "root";
$password = "";
$database = "ajax_libros";
$conexion = mysqli_connect("localhost",$username,$password,$database);

$query = mysqli_query($conexion,"UPDATE libros SET titulo='".$_POST['titulo']."', autor='".$_POST['autor']."', editorial='".$_POST['editorial']."',anno='".$_POST['anno']."',paginas='".$_POST['paginas']."' WHERE id=".$_GET['id']);

echo $query;