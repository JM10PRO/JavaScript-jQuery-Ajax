<?php

$username = "root";
$password = "";
$database = "ajax_libros";
$conexion = mysqli_connect("localhost",$username,$password,$database);

$query = mysqli_query($conexion,"SELECT * FROM libros ORDER BY ".$_GET['orden']." ".$_GET['dir']);

$libros = [];

while($row = mysqli_fetch_assoc($query)){
    // $libros = $libros.$reg['id'].','.$reg['titulo'].','.$reg['autor'].','.$reg['editorial'].','.$reg['anno'].','.$reg['paginas'].',';
    $libros[] = ['id'=>$row['id'],'titulo'=>$row['titulo'],'autor'=>$row['autor'],'editorial'=>$row['editorial'],'anno'=>$row['anno'],'paginas'=>$row['paginas']];
}

// echo $libros;

$json_string = json_encode($libros);
echo $json_string;