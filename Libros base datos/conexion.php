<?php

try {
    $database = new PDO('mysql:host=localhost; dbname=ajax_libros', 'root', '');
    $database->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // $database->exec('SET CHARACTER SET utf8');
    $sql = 'SELECT * FROM libros';

    $resultado = $database->prepare($sql);
    $resultado->execute();

    $libros = '';

    while ($registro = $resultado->fetch(PDO::FETCH_ASSOC)) {
        $libros = $libros . $registro['id'] . ',' . $registro['titulo'] . ',' . $registro['autor'] . ',' . $registro['editorial'] . ',' . $registro['anno'] . ',' . $registro['paginas'] . ',';
    }
    echo $libros;
    $resultado->closeCursor();

} catch (Exception $e) {

    die('Error: '.$e->getMessage());

}finally{
    $database=null;
}
