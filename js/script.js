$(document).ready(function() {
 
    $('img').hover(function(event) {
        event.preventDefault();
        
        $(this).hide();

        $(this).fadeIn(1000, function() {
        });
    });
});