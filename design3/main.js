$(document).ready(function(){
    var wd = parseInt($(".vs").width())*-1;
    var intv = setInterval(function(){ ani() }, 4000);
    function ani(){
        $(".imgBox").not(":animated").animate({ "margin-left" : wd+"px"}, 1000, function(){
            $(".imgBox li").eq(0).appendTo($(".imgBox"));
            $(".imgBox").css("margin-left", "0px");
        })
    }
});