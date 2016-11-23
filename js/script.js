$(document).ready(function() {
    // hover sur toutes les images
    $('img').hover(function(event) {
        event.preventDefault();
        // le $(this) correspond a l'image ciblée par le hover
        // .hide() ajout le style display: none; sur l'élément
        $(this).hide();

        $(this).fadeIn(1000, function() {
        });
    });
});