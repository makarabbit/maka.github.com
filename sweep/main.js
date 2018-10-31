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
    
    $(".txtBox a").click(function(){
       var scrollPosition = $($(this).attr("href")).offset().top;
        $("html,body").not(":animated").animate({
           scrollTop:scrollPosition 
        }, 500);
    });
    $(".colLst a").click(function(){
       var scrollPosition = $($(this).attr("href")).offset().top;
        $("html,body").not(":animated").animate({
           scrollTop:scrollPosition 
        }, 500);
    });
    
    $(".menu").click(function(){
        $(".collap").addClass("on");
    });
    $(".close").click(function(){
        $(".collap").removeClass("on");
    });
    
    $(".txtBox a").mouseover(function(){
       $(".onLine").removeClass("on");
       $(this).find(".onLine").addClass("on"); 
    });
    $(".txtBox a").mouseleave(function(){
       $(".onLine").removeClass("on"); 
    });
});


$(document).ready(function(){ 
  $(window).scroll(function(){ 
      var hei = $(document).scrollTop(); 
      if(hei > 400){ 
          var container = $(".name");
            // Shuffle the contents of container
          container.stop().shuffleLetters();
      } 
  }); 
});