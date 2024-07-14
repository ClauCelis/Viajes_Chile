$(document).ready(function(){
    $('[data-bs-toggle="tooltip"]').tooltip();
    
});


$( "#enviarCorreo" ).on( "click", function() {
    alert( "Te estaremos contactando pronto. ¡Muchas gracias!" );
    setTimeout(function() {
        $('#enviarCorreo').tooltip('hide');
    }, 500);
});

