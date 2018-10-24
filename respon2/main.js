$(document).ready(function(){

    
    $(".scroll").click(function(){
       var scrollPosition = $($(this).attr("href")).offset().top;
        $("html,body").not(":animated").animate({
           scrollTop:scrollPosition 
        }, 500);
    });
    $(".collapBtn").click(function(){
        $(".collaps").css("left", "0px");
    });
    $(".closeBtn").click(function(){
       $(".collaps").css("left", "200%"); 
    });
    
    $(".menu a, .subMenu ul").mouseover(function(){
       var idx = $(this).index();
        $(".menu a").removeClass("on");
       $(".menu a").eq(idx).addClass("on");
        $(this).siblings().removeClass("on");
       $(".subMenu").stop().slideDown(500);
    });
    $(".menu a, .subMenu ul").mouseleave(function(){
       $(".menu a").removeClass("on");
        $(".subMenu").stop().slideUp(300);
    });
    $(".icoBox li").hover(function(){
       $(this).find(".icoImg, .icoT").stop().fadeOut(300);
       $(this).find(".icoHover").stop().fadeIn(500);
    });
    $(".icoBox li").mouseleave(function(){
        $(this).find(".icoHover").stop().fadeOut(300);
       $(this).find(".icoImg, .icoT").stop().fadeIn(500);
    });
    
    /* 클릭 시 다음페이지로 이동 */
    $(".scroll").click(function(){
       var scrollPosition = $($(this).attr("href")).offset().top;
        $("html,body").not(":animated").animate({
           scrollTop:scrollPosition 
        }, 500);
    });
});
/*
$(document).ready(function(){
        var ht = parseInt($(window).height());
    $(window).on("mousewheel", function (e) {
        if (e.originalEvent.wheelDelta < 0) {
            $("html,body").not(":animated").animate({
                scrollTop: "+=" + ht + "px"
            }, 500);
        } else {
            $("html, body").not(":animated").animate({
                scrollTop: "-=" + ht + "px"
            }, 500);
        }
        return false;
    });
});
*/