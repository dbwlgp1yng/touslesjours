// popup
$(document).ready(function() {
    function setCookie(name, value, expire) {
        var today = new Date();

        today.setDate(today.getDate() + expire);
        document.cookie = name + '=' + value + '; path=/; expires=' + today.toGMTString() + ';';    
    }
    var popup = '.popup';

    $(popup).find('a.today_close').click(function(e){
        e.preventDefault(); 
        setCookie('exCookie','yes',1); 
        $(popup).stop().fadeOut(0); 
        $('body').css('overflow', 'visible');
    });

    $(popup).find('a.close').click(function(e) {
        e.preventDefault(); 
        $(popup).stop().fadeOut(0); 
        $('body').css('overflow', 'visible');
    });
    
    var cookieData = document.cookie;

    if(cookieData.indexOf('exCookie=yes') < 0) { 
        $(popup).fadeIn(0); //팝업 보임
        $('body').css('overflow', 'hidden');
    }else { 
        $(popup).fadeOut(0);
        $('body').css('overflow', 'visible');
    }

});

// title scroll
$(document).ready(function() {
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
        speed: 1000,
        slidesPerView: 4,
        spaceBetween: 40,
        scrollbar: {
            el: ".menu .swiper-scrollbar",
            hide: true,
        },
        navigation: {
            nextEl: ".menu .swiper-button-next",
            prevEl: ".menu .swiper-button-prev",
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
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