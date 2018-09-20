$(document).ready(function(){
    $(".topMenu .tnbBox .tnb li a").click(function(){
       $(".topMenu .tnbBox .tnb li a").removeClass("on");
        $(this).addClass("on");
    });
});