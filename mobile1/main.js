$(document).ready(function(){
   // 메뉴클릭시 보이기
    var sw = 1;
    $("#hd .tnb .menu").click(function(){
        if (sw == 1){
            $(".subMenu").slideDown();
        } else {
            $(".subMenu").slideUp();
        }
        sw = sw*-1;
    });
    
    // 화면 페이드인아웃 효과주기
    var wd = parseInt($(window).width());
    var cnt = $(".imgBox li").length;
    var n = 0;
    $(".imgBox li").eq(0).css("z-index", "30").css("opacity", "1");
    $(".imgBox li").eq(0).siblings().css("z-index", "25").css("opacity", "0");
    var intv = setInterval(function(){
       if(n<cnt-1){
           n=n+1;
           nAni(n);
       } else {
           n=0;
           nAni(n);
       }
    }, 3000);
    
    function nAni(i){
        $(".imgBox li").eq(i).siblings().css("z-index", "25");
        $(".imgBox li").eq(i).css("z-index", "30").not(":animated").animate({"opacity" : "1"}, 800, function(){
            $(".imgBox li").eq(i).siblings().css("opacity", "0");
        });
    }
    
    //슬라이드 배
    var S_intv = setInterval(function(){ sAni(); }, 3000);
    function sAni(){
      $(".bannerBox").not(":animated").animate({"margin-left" : wd*-1+"px"}, 1000, function(){
         $(".bannerBox li").eq(0).appendTo(".bannerBox");
          $(".bannerBox").css("margin-left", "0px");
      });
    };
    
    $(".ctaBox li").click(function(){
        if (sw == 1){
            $(this).find(".ctaCon").stop().slideDown(500); 
        } else {
            $(this).find(".ctaCon").stop().slideUp(500); 
        }
        sw = sw*-1;
    });
});