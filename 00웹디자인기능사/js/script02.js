// menu
$(".mainmenu > li").mouseover(function(){
    $(this).children("a").css("background","#fff")
    $(this).find(".submenu").stop().slideDown(300);
});
$(".mainmenu > li").mouseout(function(){
    $(".mainmenu > li > a").css("background","initial")
    $(".submenu").stop().slideUp(100);
})