$(document).ready(function() {
    $('.owl-slider').owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000
    });

    if($(window).width() > 768) {
        $('body').on('click', '#menu .dropdown .dropdown-toggle', function(e){
            e.preventDefault();
            window.location = $(this).attr('href');
        })
    }
});
