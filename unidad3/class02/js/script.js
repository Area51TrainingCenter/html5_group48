var datos = [];

var friends = [];

function init() {

//    alert("Clase de eventos");

    var titulo = document.getElementById("titulo");

    titulo.innerHTML = "Modificando o ke ase";


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

    // registrando el usuario en nuestra lista de datos
    register(dni, usuario);

    //insertando el item usuario a nuestro HTML
    generateUsuario(dni);

}

function generateUsuario(dni) {

    data = datos[dni];

    /*<div class="col-md-4">
     <h2>Antonio Cucho</h2>
     <p>antoniocuga@gmail.com</p>
     <p>979467802</p>
     <p><a class="btn btn-default" href="#" role="button">Agregar a mis amigos</a></p>
     </div>*/

    var container = document.getElementById("row-datos");

    var item = document.createElement("div");
    item.className = "col-md-4";

    var nombre = document.createElement("h2");
    nombre.innerHTML = data.txtnombres;

    var email = document.createElement("p");
    email.innerHTML = data.txtemail;

    var celular = document.createElement("p");
    celular.innerHTML = data.txtcelular;

    var button = document.createElement("a");
    button.className = "btn btn-default";
    button.innerHTML = "Agregar a mis amigos";

    item.appendChild(nombre);
    item.appendChild(email);
    item.appendChild(celular);
    item.appendChild(button);
    container.appendChild(item);

    button.addEventListener('click', function() {
        addFriend(dni);
    });
}

function addFriend(dni) {

    var data = datos[dni];

    var confirmacion = confirm("¿Desea agregar a " + data.txtnombres + " tus amigos?");

    if (confirmacion) {
        friends.push(dni);
    }
}

function listFriends() {

    var listcontainer = document.getElementsByClassName("list-friends");

    var lista = document.createElement("ul");

    for (var i = 0; i < friends.length; i++) {

        var item = document.createElement("li");

        item.addEventListener('click', function() {
            removeFriend(dni, item);
        });

        data = datos[friends[i]];

        item.innerHTML = data.txtnombres;

        lista.appendChild(item);
    }

    listcontainer[0].appendChild(lista);

    listcontainer[0].className = "list-friends-visible";
}

function removeFriend(dni, item) {

    var data = datos[dni];

    var confirmacion = confirm("¿Desea eliminar a " + data.txtnombres + " de tu lista de amigos?");

    if (confirmacion) {
        friends.splice(dni);
        item.parentNode.removeChild(item);
    }
}