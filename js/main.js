$(document).ready(function() {
    var swiper = new Swiper("main .swiper", {
        slidesPerView: 'auto', 
        spaceBetween: 50, 
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: "main .swiper-button-next",
            prevEl: "main .swiper-button-prev",
        },
        allowTouchMove: false, 
        speed: 800, 
        pagination: {
          el: "main .swiper-pagination",
          clickable: true,
        },
        loop: true,
    });
});




