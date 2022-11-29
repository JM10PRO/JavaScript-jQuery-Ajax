<?php

$username = "root";
$password = "";
$database = "ajax_prov_mun";
$conexion = mysqli_connect("localhost",$username,$password,$database);
$id = $_GET['id'];
$query = mysqli_query($conexion,"SELECT * FROM municipios WHERE provincia=$id");

echo '<select id="municipios">';

while($row = mysqli_fetch_assoc($query)){
    echo "<option value='".$row['id']."'>".$row['municipio']."</option>";
}
echo '</select>';