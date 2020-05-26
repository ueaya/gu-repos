"use strict"

const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 7000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});