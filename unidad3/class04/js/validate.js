$().ready(function() {

    $("#sus-form").validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            email: {
                required: "Este campo es obligatorio",
                email: "Ingrese un email correcto"
            }
        }
    });




});