var datos = [];

function init() {

//    alert("Clase de eventos");

}

function register(dni, usuario) {

    datos[dni] = usuario;
}

function add() {

    //obteniendo los valores de formulario.

    var formulario = document.getElementById("form-register");

    var childrens = formulario.children;

    var usuario = {};

    for (var i = 0; i < (childrens).length; i++) {
        //alert(childrens[i].children.length);
        if (childrens[i].children.length > 0) {
            var element = childrens[i].children[0];
            if (element.type == "text") {
                usuario[element.id] = element.value;
            }
        }
    }

    dni = usuario.txtdni;
    register(dni, usuario);

}

function generateUsuario(){
    
    
}
