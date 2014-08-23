$().ready(function() {

    var slider = $("#slider");

    var images = $(slider).find("img.image-slider");

    var thumbs = $("#thumbs-slider");

    $(images).each(function(index) {
        var element = 'img';
        var thumbImage = document.createElement(element);
        var src = $(this).attr('src');
        
        //Asignando atributos a el elemento image thumb
        $(thumbImage).attr({
            'src': src,
            'class': 'image-thumb',
            'index':index
        });
        
        //insertando el elemento thumb a nuestra lista.
        $(thumbs).append(thumbImage);
    });

});