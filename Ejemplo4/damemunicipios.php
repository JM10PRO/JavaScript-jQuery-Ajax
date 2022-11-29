<?php

$username = "root";
$password = "";
$database = "ajax_prov_mun";
$conexion = mysqli_connect("localhost",$username,$password,$database);
$id = $_GET['id'];
$id ="";
$titulo ="";
$autor ="";
$editorial ="";
$anno = 0;
$paginas = 0;
$query = mysqli_query($conexion,"INSERT INTO libros VALUES('','Historia de dos ciudades','Charles Dickens','Juventud',1859,170)");

if($_GET){
    mysqli_fetch_assoc($query);
}
