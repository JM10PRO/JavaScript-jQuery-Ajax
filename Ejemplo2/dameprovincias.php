<?php

$username = "root";
$password = "";
$database = "ajax_prov_mun";
$conexion = mysqli_connect("localhost",$username,$password,$database);

$query = mysqli_query($conexion,"SELECT * FROM provincias");

echo '<select id="provincias">';

while($row = mysqli_fetch_assoc($query)){
    echo "<option value=".$row['id'].">".$row['provincia']."</option>";
}
echo '</select>';