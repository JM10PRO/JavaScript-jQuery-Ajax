$(document).ready(function () {
    let orden = 'id';
    let dir = 'ASC';
    muestralibros(orden);
    
    $('#tabla').on('click','th:not("#acciones")', function() {
        elemento = $(this).text();
        muestralibros(elemento);

        if(dir == 'ASC'){
            dir = 'DESC';
        }else if(dir == 'DESC'){
            dir = 'ASC';
        }
    });

    function muestralibros(orden){
        $.ajax({
            url: 'damelibros.php?orden='+orden+'&dir='+dir,
            type: 'GET',
            dataType: 'json',
            success: function (datos) {
                console.log(datos);
                let libros = '<table id="tablalibros" class="table table-striped"><tr><th>ID</th><th id="titulo">Titulo</th><th id="autor">Autor</th><th>Editorial</th><th>Anno</th><th>Paginas</th><th id="acciones">ACCIONES</th></tr>';

                datos.forEach(function (elemento, i) {
                    libros = libros + '<tr><td>' + elemento.id + '</td><td>' + elemento.titulo + '</td><td>' + elemento.autor + '</td><td>' + elemento.editorial + '</td><td>' + elemento.anno + '</td><td>' + elemento.paginas + '</td><td><button class="modificar">Modificar</button>&nbsp;<button class="borrar">Borrar</button></td></tr>';
                });

                $('#tabla').html('</table>');
                $('#tabla').html(libros);
            },
            error: function (xhr, status) {
                alert('Disculpe, existió un problema');
            },
            complete: function (xhr, status) {
                // alert('Petición realizada');
            }
        });
    }

    $('#insertar').click(function () {
        $.ajax({
            url: 'insertalibro.php',
            type: 'POST',
            dataType: 'text',
            data: {
                titulo: $('#titulo').val(),
                autor: $('#autor').val(),
                editorial: $('#editorial').val(),
                anno: $('#anno').val(),
                paginas: $('#paginas').val()
            },
            success: function (datos) {
                fila = '';
                $('#tablalibros').append(fila);
            },
            error: function (xhr, status) {
                alert('Disculpe, existió un problema');
            },
            complete: function (xhr, status) {
                // alert('Petición realizada');
            }
        });

    });
    let id = '';
    $('#tabla').on('click', '.modificar', function () {
        id = $(this).parent().siblings().eq(0).html();
        let titulo = $(this).parent().siblings().eq(1).html();
        let autor = $(this).parent().siblings().eq(2).html();
        let editorial = $(this).parent().siblings().eq(3).html();
        let anno = $(this).parent().siblings().eq(4).html();
        let paginas = $(this).parent().siblings().eq(5).html();

        $('#titulo').val(titulo);
        $('#autor').val(autor);
        $('#editorial').val(editorial);
        $('#anno').val(anno);
        $('#paginas').val(paginas);
        console.log(id);
        //let fila = $(this).parent().parent();
        $('#aceptar').css('display','');
    });

    $('#aceptar').on('click', function () {
        console.log('hola');
        $('#aceptar').css('display','none');
        
        $.ajax({
            url: 'modificalibro.php?id=' + id,
            type: 'POST',
            dataType: 'text',
            data: {
                titulo: $('#titulo').val(),
                autor: $('#autor').val(),
                editorial: $('#editorial').val(),
                anno: $('#anno').val(),
                paginas: $('#paginas').val()
            },
            success: function (datos) {
                muestralibros(orden);
            },
            error: function (xhr, status) {
                alert('Disculpe, existió un problema');
            },
            complete: function (xhr, status) {
                // alert('Petición realizada');
            }
        });
    });

    $('#tabla').on('click', '.borrar', function () {
        let id = $(this).parent().siblings().eq(0).html();
        console.log(id);
        let fila = $(this).parent().parent();
        $.ajax({
            url: 'borralibro.php?id=' + id,
            type: 'GET',
            dataType: 'text',
            success: function (datos) {
                fila.remove();
            },
            error: function (xhr, status) {
                alert('Disculpe, existió un problema');
            },
            complete: function (xhr, status) {
                // alert('Petición realizada');
            }
        });
    });

    // $('#bt-cargar').click(function () {
        
        
    // });
});