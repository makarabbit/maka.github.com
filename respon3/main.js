$(document).ready(function(){
   $(".menu li").mouseover(function(){
      $(this).find(".subMenu").stop().slideDown(500); 
   });
    $(".menu li").mouseleave(function(){
       $(".subMenu").stop().slideUp(300); 
    });
    
    
});