$(document).ready(function(){
    var wd = parseInt($("#con1").width())*-1;
    var intv = setInterval(function(){ vAni() }, 4000);
    function vAni(){
        $("#con1 .imgBox").not(":animated").animate({ "margin-left" : wd+"px"}, 800, function(){
            $("#con1 .imgBox li").eq(0).appendTo($("#con1 .imgBox"));
            $("#con1 .imgBox").css("margin-left", "0px");
        });
    }
    
    var g_wd = parseInt($("#vs1").width())*-1;
    $("#vs1 .more").click(function(){
       $(".imgBox2").not(":animated").animate({"margin-left" : g_wd+"px"}, 800, function(){
          $(".imgBox2 li").eq(0).appendTo($(".imgBox2"));
           $(".imgBox2").css("margin-left", "0px");
       }) 
    });
});