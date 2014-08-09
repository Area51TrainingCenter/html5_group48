var productos = [
    {codigo: "TV01", name: "Television 20", rubro: "Hogar"},
    {codigo: "TV01", name: "Television 20", rubro: "Hogar"},
    {codigo: "TV01", name: "Television 20", rubro: "Hogar"},
    {codigo: "TV01", name: "Television 20", rubro: "Hogar"},
    {codigo: "TV01", name: "Television 20", rubro: "Hogar"},
    {codigo: "TV01", name: "Television 20", rubro: "Hogar"},
    {codigo: "TV01", name: "Television 20", rubro: "Hogar"},
    {codigo: "TV01", name: "Television 20", rubro: "Lavanderia"},
    {codigo: "TV01", name: "Television 20", rubro: "Lavanderia"},
    {codigo: "TV01", name: "Television 20", rubro: "Lavanderia"},
    {codigo: "TV01", name: "Television 20", rubro: "Lavanderia"},
    {codigo: "TV01", name: "Television 20", rubro: "Lavanderia"},
    {codigo: "TV01", name: "Television 20", rubro: "Lavanderia"},
    {codigo: "TV01", name: "Television 20", rubro: "Lavanderia"},
    {codigo: "TV01", name: "Television 20", rubro: "Lavanderia"},
    {codigo: "TV01", name: "Television 20", rubro: "Lavanderia"},
    {codigo: "TV01", name: "Television 20", rubro: "Lavanderia"},
    {codigo: "TV01", name: "Television 20", rubro: "Exteriores"},
    {codigo: "TV01", name: "Television 20", rubro: "Exteriores"},
    {codigo: "TV01", name: "Television 20", rubro: "Exteriores"},
    {codigo: "TV01", name: "Television 20", rubro: "Exteriores"},
    {codigo: "TV01", name: "Television 20", rubro: "Exteriores"},
    {codigo: "TV01", name: "Television 20", rubro: "Exteriores"},
    {codigo: "TV01", name: "Television 20", rubro: "Exteriores"},
    {codigo: "TV01", name: "Television 20", rubro: "Exteriores"},
    {codigo: "TV01", name: "Television 20", rubro: "Exteriores"},
    {codigo: "TV01", name: "Television 20", rubro: "Exteriores"},
    {codigo: "TV01", name: "Television 20", rubro: "Exteriores"},
    {codigo: "TV01", name: "Television 20", rubro: "Exteriores"},
    {codigo: "TV01", name: "Television 20", rubro: "Exteriores"}
];

$().ready(function() {

    //document.getElementById
    var lista = $('#productos');

    $(productos).each(function(index, value) {
        //productos[index] -> value

        var item = document.createElement("div");
        var nombre = document.createElement("h3");
        var rubro = document.createElement("h4");
        var codigo = document.createElement("h5");

        $(item).addClass("item-producto " + value.rubro);
        $(nombre).html(value.name);
        $(rubro).html(value.rubro);
        $(codigo).html(value.codigo);

        $(item).html([$(nombre), $(rubro), $(codigo)]);

        lista.append($(item));
    });

    $(".item-menu").click(function() {

        event.preventDefault();

        var filter = $(this).attr("data-filter");

        var lista = $('#productos');

        if (filter == "todos") {
            lista.find(".item-producto").show();
        } else {
            lista.find(".item-producto").hide(1000);
            lista.find(filter).show(1000);
        }


    });


});