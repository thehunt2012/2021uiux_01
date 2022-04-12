$(".menu li").mouseover(function(){
    $(this).css("background","red")
    $(this).find(".submenu").stop().slideDown(200);
});
$(".menu li").mouseout(function(){
    $(".menu li").css("background","initial")
    $(".submenu").stop().slideUp(100);
});