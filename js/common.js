// header scroll
$(document).ready(function() {
    $(window).scroll(function() {
        var top = $(this).scrollTop();

        if(top > 0) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
    });
});

// login_icon click
$(document).ready(function() {
    var dropMenu = '.login_icon';
    var speed = 'fast';

    $(dropMenu).find('.person_icon').click(function() {
        $(this).next().stop().slideToggle(speed);
    });
});