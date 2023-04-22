$(function() {
    $(window).scroll(function() {
        var sTop = $(this).scrollTop(); 
        
        $('body > section').each(function(index) {
            var top = $(this).find('h2').offset().top; 

            if(sTop > top - 900) {
                $(this).find('h2').addClass('active');
            } 
        });
    });

    $(window).trigger('scroll');
});

// main
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

// menu
$(document).ready(function() {
    var swiper = new Swiper(".menu .swiper", {
        speed: 900,
        loop: true,
        slidesPerView: 4,
        spaceBetween: 40,
        centeredSlides: false,
        grabCursor: true,
        keyboard: {
        enabled: true,
        },
        breakpoints: {
        769: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        },
        scrollbar: {
            el: ".menu .swiper-scrollbar",
            hide: true,
        },
        navigation: {
            nextEl: ".menu .swiper-button-next",
            prevEl: ".menu .swiper-button-prev",
          },
    });
});

// video
$(document).ready(function() {
    window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('youtube_video', {});
    }
    $(window).scroll(function() {
        var top = $(this).scrollTop(); 
        var videoTop = $('#youtube_video').offset().top;

        if(top > videoTop - 600) {
            player.playVideo();
        }
    });
});