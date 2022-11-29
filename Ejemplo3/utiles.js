$(document).ready(function () {
    $('#bt-cargar').click(function () { 

        let id = $('#articulo').val();

        $.ajax({
            url : 'https://jsonplaceholder.typicode.com/photos',
            // data : { id : 123 },
            type : 'GET',
            dataType : 'json',
            success : function(datos) {
                console.log(datos);
                $('#contenido').append('<table class="table table-striped">');
                $.each(datos, function (i, item) {
                    if(i<10){
                        $('#contenido').append('<tr><td><img width="200px" src="'+item.url+'"></td><td><p>'+item.title+'</p></td></tr>');                    
                    }
                });
                $('#contenido').append('</table>');
            },
            error : function(xhr, status) {
                alert('Disculpe, existió un problema');
            },
            complete : function(xhr, status) {
                // alert('Petición realizada');
            }
        });
    });
});