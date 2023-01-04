$(function() {
    $('a[href*="#"]').on('click', function(e) {
        $('#proposal').show();
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 3000, 'linear');
    });

    $('#proposal').hide();
});

