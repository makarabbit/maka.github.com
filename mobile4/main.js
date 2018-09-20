$(document).ready(function(){
    var wd = parseInt($("#vs").width())*-1;
    var sw = 1
    var st = setInterval(function(){ Ani(); }, 4000);
    function Ani(){
        $("#vs .imgBox").not(":animated").animate({"margin-left" : wd+"px"}, 800, function(){
            $("#vs .imgBox li").eq(0).appendTo("#vs .imgBox");
            $("#vs .imgBox").css("margin-left", "0px");
            $("#vs .btnBox li .btn").removeClass("on");
            $("#vs .btnBox li").eq(0).appendTo($("#vs .btnBox"));
            $("#vs .btnBox li").eq(0).find(".btn").addClass("on");
        });
    }
    $("#vs .btnBox .btn").click(function(){
        clearInterval(st);
        var idx=$(this).index();
        for(var i=0; i<idx-2; i++){
            $("#vs .imgBox li").eq(0).appendTo($("#vs .imgBox"));
            $("#vs .btnBox li").eq(0).appendTo($("#vs .btnBox"));
        }
        Ani();
        st = setInterval(function(){ Ani(); }, 4000);
    })
});