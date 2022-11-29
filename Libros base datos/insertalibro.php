<?php

$username = "root";
$password = "";
$database = "ajax_libros";
$conexion = mysqli_connect("localhost",$username,$password,$database);


$titulo = $_POST['titulo'];
$autor = $_POST['autor'];
$editorial = $_POST['editorial'];
$anno = $_POST['anno'];
$paginas = $_POST['paginas'];

$query = mysqli_query($conexion,"INSERT INTO `libros` (`id`, `titulo`, `autor`, `editorial`, `anno`, `paginas`) VALUES (NULL, '".$titulo."', '".$autor."', '".$editorial."', '".$anno."', '".$paginas.".');");

echo $query;