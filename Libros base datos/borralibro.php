<?php

$username = "root";
$password = "";
$database = "ajax_libros";
$conexion = mysqli_connect("localhost",$username,$password,$database);

$query = mysqli_query($conexion,"DELETE FROM libros WHERE id=".$_GET['id']);

echo $query;