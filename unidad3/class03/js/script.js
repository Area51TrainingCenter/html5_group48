$().ready(function() {

    $('#send-post').click(function() {

        var message = $('#comment').val();

        var commentList = $('#post-list');

        var itemComment = document.createElement("div");

        $(itemComment).attr('class', 'item-comment');

        $(itemComment).html(message);


        var like = document.createElement("a");
        var del = document.createElement("a");

        $(like).attr({'class': 'like', 'href': '#'});
        $(like).html("Like");

        $(del).attr({'class': 'eliminar', 'href': '#'});
        $(del).html('Eliminar');

        $(itemComment).append([del, like])

        $(commentList).prepend(itemComment);

        $('#comment').val('');

    });



});