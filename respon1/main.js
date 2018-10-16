$(document).ready(function(){
   $(".menu li, .subMenu").mouseover(function(){
      $(this).find(".subMenu").stop().slideDown(500); 
   });
   $(".menu li, .subMenu").mouseleave(function(){
      $(".subMenu").stop().slideUp(300); 
   });
    var n = 0;
    var cnt = $(".imgBox li").length;
    $(".imgBox li").eq(0).css("z-index", "30").css("opacity", "1");
    $(".imgBox li").eq(0).siblings().css("z-index", "25").css("opacity", "0");
    $(".btnBox .btn").click(function(){
        var idx = $(this).index();
        $(".btnBox .btn").removeClass("on");
        $(this).addClass("on");
        ani(idx);
        t_ani(idx);
    });
    function ani(n){
        $(".imgBox li").eq(n).siblings().css("z-index", "25");
        $(".imgBox li").eq(n).css("z-index", "30").not(":animated").animate({"opacity":"1"}, 500, function(){
            $(".imgBox li").eq(n).siblings().css("opacity", "0");
            $(".btnBox .btn").eq(n).siblings().removeClass("on");
            $(".btnBox .btn").eq(n).addClass("on");
        });
    }
    /* 배너박스 */
    $(".proBox li").mouseover(function(){
        $(this).find(".hoverBox").stop().fadeIn();
    });
    $(".proBox li").mouseleave(function(){
       $(this).find(".hoverBox").stop().fadeOut(); 
    });
    
    /* 클릭 시 배너 넘어감 */
    function next_ani() {
        $(".proBox").not(":animated").animate({"margin-left" : "-300px"}, 500, function(){
           $(".proBox li").eq(0).appendTo($(".proBox"));
           $(".proBox").css("margin-left", "0px");
        });
    }
    function pre_ani() {
        $(".proBox li").eq(7).prependTo($(".proBox"));
        $(".proBox").css("margin-left", "-300px");
        $(".proBox").not(":animated").animate({"margin-left" : "0px"}, 500)
    }
    $(".rightBtn").click(function(){
       next_ani();
    });
    $(".leftBtn").click(function(){
        pre_ani();
    })
});