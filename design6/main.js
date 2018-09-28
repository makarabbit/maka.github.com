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
    
    $(".scroll").click(function(){
       var scrollPosition = $($(this).attr("href")).offset().top;
        $("html,body").not(":animated").animate({
           scrollTop:scrollPosition 
        }, 500);
    });
    
    $(window).scroll(function(){
        $(".bnBox").each(function(i){
            var obj = $(this).offset().top + $(this).outerHeight();
            var win = $(window).scrollTop() + $(window).height();
            if(win > obj/2){
                $(this).not(":animated").animate({"opacity":"1","margin-top":"0px"}, 500);
            }
        })
    });
    
    var wd = parseInt($("#con3").width());
    var n = 0;
    var cnt = $(".imgBox li").length;
    $(".imgBox li").eq(0).css("z-index", "30").css("opacity", "1");
    $(".imgBox li").eq(0).siblings().css("z-index", "25").css("opacity", "0");
    var intv = setInterval(function(){
       if(n<cnt-1){
           n=n+1;
           ani(n);
       } else {
           n=0;
           ani(n);
       }
    }, 4000);
    function ani(i){
        $(".imgBox li").eq(i).siblings().css("z-index", "25");
        $(".imgBox li").eq(i).css("z-index", "30").not(":animated").animate({"opacity":"1"},800,function(){
           $(".imgBox li").eq(i).siblings().css("opacity", "0");
           $(".btnBox .btn").eq(i).siblings().removeClass("on");
            $(".btnBox .btn").eq(i).addClass("on");
        });
    }  
    $(".btnBox .btn").click(function(){
       clearInterval(intv);
        var idx = $(this).index();
        $(".btnBox .btn").removeClass("on");
        $(this).addClass("on");
        ani(idx);
        intv = setInterval(function(){
       if(n<cnt-1){
           n=n+1;
           ani(n);
       } else {
           n=0;
           ani(n);
       }
    }, 4000);
    });
    
    var sw = 1;
    $(".btnBox .pause").click(function(){
        if(sw==1){
            clearInterval(intv);
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
            ani();
            intv = setInterval(function(){
               if(n<cnt-1){
                   n=n+1;
                   ani(n);
               } else {
                   n=0;
                   ani(n);
               }
            }, 4000);
        }
        sw = sw*-1;
    });
    $(".notiBox li").mouseover(function(){
       $(this).find(".notiTime time b").css("color", "#0071ce");
       $(this).find(".notiTime time span").css("color", "#0071ce");
    });
    $(".notiBox li").mouseleave(function(){
       $(this).find(".notiTime time b").css("color", "#aaa");
       $(this).find(".notiTime time span").css("color", "#aaa");
    });
    $(window).scroll(function(){
       var hgi = parseInt($(window).height());
       var sto = $(window).scrollTop();
       if(sto >= hgi ){
           $("#toTop").not(":animated").fadeIn(800);
           $("#hd").css("position", "fixed").css("margin-top", "-40px").css("background-color", "#fff").css("border-bottom", "1px solid #e0e0e0");
           $("#hd").not(":animated").slideDown(800);
       } else if(sto >= 100){
           $("#toTop").css("display", "none");
           $("#hd").css("display", "none");
       } else {
           $("#toTop").not(":animated").fadeOut(800);
           $("#hd").css("position", "absolute").css("margin-top", "0px").css("background-color", "transparent").css("border", "0");
           $("#hd").not(":animated").slideDown(800);
       }
   });
    
    /* 메뉴 */
    $(".bMenu li, .sub ul").mouseover(function(){
        $(".sub").stop().slideDown(800);
        var inN = $(this).index();
        $(".bMenu li").eq(inN).find("a").addClass("on");
        $(".bMenu li").eq(inN).find("a").siblings().removeClass("on");
    });
    $(".bMenu li, .sub ul").mouseleave(function(){
       $(".sub").stop().slideUp(300); 
       $(".bMenu li a").removeClass("on");
    });
    $(".searchBtn").click(function(){
        $(".search_container").stop().slideDown(500);
    })
    $(".closeBtn").click(function(){
       $(".search_container").stop().slideUp(300); 
    });
});
