$(document).ready(function() {
    history.scrollRestoration = "auto"; //현재 위치기억 - 새로고침시 위치 유지

    $(window).scroll(function() {
        // 스크롤 이벤트가 발생하면 실행될 함수
        var imgPos = $(".affiliation a > img").offset().top; // 이미지의 상단 위치
        var imgHeight = $(".affiliation a > img").outerHeight(); // 이미지의 높이
        var scrollPos = $(window).scrollTop(); // 스크롤 위치
        var windowH = $(window).height(); // 창의 높이

        if (scrollPos > 1750) {
            $(".affiliation a > img").addClass("scale-in-hor-left");
        }
      });
});