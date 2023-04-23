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
    $(window).trigger('scroll');
});

//search_icon 
$(document).ready(function() {
    var search = '.h_top .search_icon';
    var btn = '.h_top .search_btn';
    var speed = 'fast';

    $(btn).click(function() {
        $(this).next().stop().animate({width: "toggle"}, speed);
        $(this).toggleClass('active');
    });
});

// login_icon 
$(document).ready(function() {
    var dropMenu = '.login_icon';
    var active = '.login_active';
    var person = '.person_icon';
    var speed = 'fast';

    $(dropMenu).hover(function() {
        $(this).find(active).stop().slideDown(speed);
    }, function() {
        $(this).find(active).stop().slideUp(speed);
        $(this).find(person).removeClass('active');
    });

    $(person).focus(function() {
        $(this).next().stop().slideDown(speed);
        $(this).addClass('active');
    });

    $(active).find('a:last').keydown(function(e) {        
        if(e.keyCode == 9) {  
            if(!e.shiftKey) { 
                $(dropMenu).trigger('mouseleave');
            }
        }
    });

    $(person).keydown(function(e) {
        if(e.keyCode == 9) {
            if(e.shiftKey) {
                $(this).removeClass('active');
                $(dropMenu).find(active).stop().slideUp(speed);
            }
        }
    });
});

// gnb
$(document).ready(function() {
    var gnb = '.gnb';
    var main = '.main_nav';
    var sub = '.sub_nav';
    var speed = 500;

    var sub_bg = $('<div class="gnb_bg"></div>');
    $('header').append(sub_bg);

    $(gnb).hover(function() {
        $(sub).add(sub_bg).stop().slideDown();
    }, function() {
        $(sub).add(sub_bg).stop().slideUp();
        $(main).removeClass('active');
    });

    $(main).first().focus(function() {
        $(gnb).trigger('mouseenter'); 
        $(this).addClass('active');
    });

    $(main).focus(function() {
        $(main).removeClass('active'); 
        $(this).addClass('active'); 
    });

    $(sub).last().find('a:last').keydown(function(e) {
        if(e.keyCode == 9) {
            if(!e.shiftKey) {
                $(gnb).trigger('mouseleave');
                $(main).removeClass('active');
            }
        }
    });

    $(main).first().keydown(function(e) {
        if(e.keyCode == 9) {
            if(e.shiftKey) {
                $(gnb).trigger('mouseleave');
            }
        }
    });

    $(sub).find('li:last a').focus(function() {
        $(main).removeClass('active');
        $(this).parents(sub).prev().addClass('active');
    });
});

// scroll_top 
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