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
    $(".menu li, .sub").mouseover(function(){
       $(this).find(".sub").stop().slideDown(500);
    });
    $(".menu li").mouseleave(function(){
       $(this).find(".sub").stop().slideUp(300);
        $(".menu li a").removeClass("on");
    });
    
    var wd = parseInt($("#vs").width())*-1;
    var intv = setInterval(function(){ ani() }, 4000);
    function ani(){
        $(".imgBox").not(":animated").animate({"margin-left" : wd+"px"}, 1000, function(){
           $(".imgBox li").eq(0).appendTo($(".imgBox"));
           $(".imgBox").css("margin-left", "0px");
        });
    }
    
    var wid = parseInt($(".R_Box").width());
    var n=0;
    var cnt = $(".R_Box li").length;
    $(".R_Box li").eq(0).css("z-index", "30").css("left", "0px");
    $(".R_Box li").eq(0).siblings().css("z-index", "25").css("left", wid+"px");
    var snt = setInterval(function(){
        if(n<cnt-1){
            n=n+1;
            cAni(n);
        } else {
            n=0;
            cAni(n);
        }
    }, 4000);
    function cAni(i){
        $(".R_Box li").eq(i).siblings().css("z-index", "25");
        $(".R_Box li").eq(i).css("z-index", "30").not(":animated").animate({"left":"0px"}, 1000, function(){
           $(".R_Box li").eq(i).siblings().css("left", wid+"px"); 
        });
    }
});