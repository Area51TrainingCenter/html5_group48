var datos = [];

function init() {

//    alert("Clase de eventos");

}

function register(usuario) {

    datos[usuario.txtdni] = usuario;
}

function add() {

    //obteniendo los valores de formulario.

    var formulario = document.getElementById("form-register");

    var childrens = formulario.children;

    var usuario = {};

    for (var i = 0; i < (childrens).length; i++) {

        console.log(childrens[i][0].id);
        //usuario[childrens]

    }





}
