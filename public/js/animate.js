$(document).ready(function() {
    $('.folder').on('mouseenter', function() {
        $(this).toggleClass('folder-open');
    });

    $('.folder').on('mouseleave', function() {
        $(this).toggleClass('folder-open');
    });
});
