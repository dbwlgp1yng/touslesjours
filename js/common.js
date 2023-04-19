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
            $(this).css('backgroundPosition', '-30px -30px');
            flag = 'on';
        } else if(flag == 'on') { // 클릭이 됐을 때
            $(this).css('backgroundPosition', '-30px 0');
            flag = 'off';
        }
    });
    $(dropMenu).hover(function() {
        $(this).find('.person_icon').stop().css('backgroundPosition', '-30px -30px');
    });
    $(dropMenu).mouseleave(function() {
        $(this).find('ul').slideUp(speed);
        $(this).find('.person_icon').stop().css('backgroundPosition', '-30px 0');
        flag = 'off';
    });
    
    $(dropMenu).find('.login_active a:last').keydown(function(e) {        
        if(e.keyCode == 9) {  
            if(!e.shiftKey) { 
                $(dropMenu).trigger('mouseleave');
            }
        }
    });
});


// scroll_top event
$(document).ready(function(){
    var scrollBtn = '.scroll_top a';
    var speed = 1700;
    
    $(window).scroll(function(){
      var sTop = $(this).scrollTop();
     
        if(sTop > 200){
            $(scrollBtn).parent().stop().fadeIn(600);
        }else{
            $(scrollBtn).parent().stop().fadeOut(600);
        }
      
        var pointHeight = $(document).height() - $('footer').outerHeight() - $(window).height();
      
        if(sTop > pointHeight){
            $(scrollBtn).parent().addClass('active');
        }else{
            $(scrollBtn).parent().removeClass('active');
        }
      
        speed = sTop / 2;

        $(scrollBtn).click(function(e){
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop : 0
        },speed);
        });
    });
  });