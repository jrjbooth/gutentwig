jQuery( document ).ready( function( $ ) {


    $('#nav-toggle').click( function () {
        $('#nav').toggleClass('closed');
    });

    $('.comment-form').click( function () {
        $(this).toggleClass('active');
    });


});