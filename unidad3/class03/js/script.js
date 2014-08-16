$().ready(function() {

    var posts = [];
    var id = 1;

    $('#send-post').click(function() {

        var message = $('#comment').val();

        var commentList = $('#post-list');

        var itemComment = document.createElement("div");

        $(itemComment).attr({'class': 'item-comment', 'id': 'comment-' + id});
        $(itemComment).html(message);

        posts[1] = message;

        //Creando elementos de comentario. Like, Like count and delete.
        var like = document.createElement("a");
        var likecount = document.createElement("span");
        var del = document.createElement("a");


        //Añadiendo propiedades al boton like
        $(like).attr({'class': 'like', 'href': '#', 'comment-id': id});
        $(like).html("Like: ");

        //Añadiendo propiedades al boton eliminar
        $(del).attr({'class': 'eliminar', 'href': '#', 'comment-id': id});
        $(del).html('Eliminar');


        //Añadiendo cantidad de likes
        $(likecount).html('0');

        //insertando likecount a el boton de like.
        $(like).append(likecount);

        //añadiendo links a nuestro comentario.
        $(itemComment).append([del, like])

        //Insertando los comentarios en la lista. (Orden inverso)
        $(commentList).prepend(itemComment);

        //limpiando nuestro textarea.
        $('#comment').val('');

        //Incrementando el ID
        id++;

    });

    // Evento de click para el boton like
    $('#post-list').on('click', '.item-comment > a.like', function(event) {

        //obteniendo el valor id del comentario
        var id = $(this).attr('comment-id');

        //obteniendo el valor id del comentario
        var commentCount = $('#comment-' + id).find('.like > span');

        //Obtiendo cantidad de comentarios
        var count = commentCount.html();

        //parseando de texto a numero
        count = parseInt(count);

        //Agregando la cantidad de comentarios final
        commentCount.html((count + 1));

    });

    // Evento de click para el boton eliminar
    $('#post-list').on('click', '.item-comment > a.eliminar', function(event) {

        if (confirm("Desea eliminar este comentario")) {

            var id = $(this).attr('comment-id');

            var comment = $('#comment-' + id);

            $(comment).remove();
        }

    });

    $('#registrarse').click(function() {

        $("#registro").dialog();

    });


});