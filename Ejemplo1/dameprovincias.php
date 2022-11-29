<?php

$username = "root";
$password = "";
$database = "bd_provincias";
$conexion = mysqli_connect("localhost",$username,$password,$database);

$query = mysqli_query($conexion,"SELECT * FROM tbl_provincias");

echo '<table class="table table-striped">';
echo '<tr><th>ID</th><td>provincias</td></tr>';

while($row = mysqli_fetch_assoc($query)){
    echo "<tr><td>".$row['cod']."</td><td>".$row['nombre']."</td></tr></td>";
}
echo '</table>';