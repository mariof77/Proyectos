// Codigo de jquery que se ejecuta el documento y se carga totalmente
$(document).ready(function() {
    $('section#pantallas a').on('click',function(){
        $('#modal img').attr('src', $(this).attr('data-image-url'));
    });
});