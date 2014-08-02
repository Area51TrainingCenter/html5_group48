
function init(msg) {

    alert(msg)

}

function listdatos() {

    var datos = [
        {"nombre": "Antonio", "edad": 23},
        {"nombre": "Antonio", "edad": 23},
        {"nombre": "Antonio", "edad": 23},
        {"nombre": "Antonio", "edad": 23},
        {"nombre": "Antonio", "edad": 23},
        {"nombre": "Antonio", "edad": 23},
    ];

    return datos;

}

function listdatos2(nombre, edad) {

    var datos = [
        {"nombre": nombre, "edad": edad}
    ];

    return datos;

}

function createList(datos) {

    var lista = document.getElementById("lista-datos");

    for (var i = 0; i < datos.length; i++) {

        var dato = datos[i];

        var item = createItem(dato);

        //Añadiendo a la lista padre
        lista.appendChild(item);

    }

}

function createItem(dato) {

    //Creando un nuevo elemento : DIV
    var item = document.createElement("div");
    item.className = "item-lista";

    //Creando un nuevo elemento : H3
    var nombre = document.createElement("h3");
    nombre.innerHTML = "Nombre: " + dato.nombre;
    nombre.className = "nombre-item-lista";

    //Creando un nuevo elemento : H4
    var edad = document.createElement("h4");
    edad.innerHTML = "Edad: " + dato.edad;
    edad.className = "edad-item-lista";

    //Añadiendo nombre y edad
    item.appendChild(nombre);
    item.appendChild(edad);

    return item;

}

function agregar() {

    var nombre = document.getElementById("nombre-text").value;
    var edad = document.getElementById("edad-text").value;

    var d2 = listdatos2(nombre, edad);

    createList(d2);



}