$(document).ready(function () {
    var ht = parseInt($(window).height());
    
    // 서브메뉴보이기
    $(".menu li, .sub ul").mouseover(function () {
        var idx = $(this).index();
        $(".sub").stop().slideDown(500);
        $(".menu li a").removeClass("on")
        $(".menu li a").eq(idx).addClass("on");
    });
    $(".menu li, .sub ul").mouseleave(function () {
        $(".sub").stop().slideUp(500);
        $(".menu li a").removeClass("on");
    });
    
    var hdoff = $("#hd").offset().top;
    $(window).scroll(function(){
       var scr = $(window).scrollTop();
       if (scr>=hdoff) {
           $("#hd").css("top", "-30px").css("background", "rgba(3,3,3,1)");
       } else {
           $("#hd").css("top", "0").css("background", "rgba(3,3,3,0.8)");
       }
    }); 
    
    // 한페이지씩 스크롤하기
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
    
    // 메인비주얼 스크롤
    var wd = parseInt($("#vs").width());
    var n = 0;
    var cnt = $(".imgBox li").length;
    $(".imgBox li").eq(0).css("z-index", "30").css("opacity", "1");
    $(".imgBox li").eq(0).siblings().css("z-index", "25").css("opacity", "0");
    var intv = setInterval(function(){
       if(n<cnt-1){
           n=n+1;
           vAni(n);
           tAni(n);
       } else {
           n=0;
           vAni(n);
           tAni(n);
       }
    }, 4000);
    function vAni(i){
        $(".imgBox li").eq(i).siblings().css("z-index", "20");
        $(".imgBox li").eq(i).css("z-index", 30).not(":animated").animate({"opacity" : "1"}, 800, function(){
           $(".imgBox li").eq(i).siblings().css("opacity","0");
        });
    }
    $(".titBox").eq(0).addClass("on");
    function tAni(i){
        $(".titBox").removeClass("on");
        $(".titBox").eq(i).addClass("on");
    };
    
    //컨텐츠2 스크롤
    var C_wd = parseInt($(".conWrap").width())*-1;
    var C_intv = setInterval(function(){ cAni(); }, 3000);
    function cAni(){
        
        $(".conImgBox").not(":animated").animate({ "margin-left" : C_wd+"px" }, 1000, function(){
            $(".conImgBox li").eq(0).appendTo($(".conImgBox"));
            $(".conImgBox").css("margin-left", "0px");
            $(".btnBox li .btn").removeClass("on");
            $(".btnBox li").eq(0).appendTo($(".btnBox"));
            $(".btnBox li").eq(0).find(".btn").addClass("on");
        });
    }
    $(".btnBox li").click(function(){
       clearInterval(C_intv);
        var idx = parseInt($(this).attr("data-val"));
        for(var i=0; i<idx-1; ++i){
            $(".btnBox li").eq(0).appendTo($(".btnBox"));
            $(".conImgBox li").eq(0).appendTo($(".conImgBox"));
        }
        cAni();
        C_intv = setInterval(function(){ cAni(); }, 3000);
    });
});
