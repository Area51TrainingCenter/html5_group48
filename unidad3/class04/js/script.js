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
            'index': index
        });

        //insertando el elemento thumb a nuestra lista.
        $(thumbs).append(thumbImage);
    });

    setInterval(function() {

        var activeImage = $('#slider img.active');
        var nextImage = $(activeImage).next();

        if (!nextImage[0]) {
            var images = $('#slider').find('img');
            nextImage = images[0];
        }
        
        $(activeImage).removeClass('active').slideDown(1000);
        $(nextImage).addClass('active').slideUp(1000);

    }, 1000);


    $('#thumbs-slider').find('img').on("click", function() {

        var images = $('#slider').find("img.image-slider");
        var index = $(this).attr('index');
        var selectImage = images[index];
        var activeImage = $('#slider').find("img.active");

        $(activeImage).removeClass('active').fadeOut(100);
        $(selectImage).addClass('active').fadeIn(100);

    });


});