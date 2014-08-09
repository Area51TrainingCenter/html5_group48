$("document").ready(function() {

    $('.efect1').click(function() {

        $(this).fadeOut(1000, function() {
            $(this).fadeIn(1000);
        });
        
        $(this).fadeIn(1000, function() {
            $(this).fadeOut(1000);
        });

    });


});



