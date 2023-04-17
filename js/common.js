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
    var flag = 'off';

    $(dropMenu).find('.person_icon').click(function() {
        $(this).next().stop().slideToggle(speed);
        if(flag == 'off') { // 클릭이 안됐을 때
            $(this).css({
                backgroundPosition: '-30px -30px'
            });
            flag = 'on';
        } else if(flag == 'on') { // 클릭이 됐을 때
            $(this).css({
                backgroundPosition: '-30px 0'
            });
            flag = 'off';
        }
    });
});