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

        var like = document.createElement("a");
        var del = document.createElement("a");

        $(like).attr({'class': 'like', 'href': '#', 'comment-id': id});
        $(like).html("Like");

        $(del).attr({'class': 'eliminar', 'href': '#', 'comment-id': id});
        $(del).html('Eliminar');

        $(itemComment).append([del, like])

        $(commentList).prepend(itemComment);

        $('#comment').val('');

        id++;

    });


    $('#post-list').on('click', '.item-comment > a.like', function(event) {
        alert("aca");
    });


});