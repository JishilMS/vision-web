$(function() {
    $('.why-choose-slider').slick({
        dots: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: false,
        arrows: false,
    });
})

$(function() {
    'use strict'

    $('[data-toggle="offcanvas"]').on('click', function() {
        $('.offcanvas-collapse').toggleClass('open')
    })
})
$(document).ready(function() {
    $(".hamburger").click(function() {
        $(this).toggleClass("is-active");
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('.custom-navbar ').addClass('sticky')
    } else {
        $('.custom-navbar ').removeClass('sticky')
    }
});