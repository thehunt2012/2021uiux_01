$(".menu > li").mouseover(function(){
    $(this).children("a").css("background","orange")
    $(this).find(".submenu").stop().slideDown(200);
});
$(".menu > li").mouseout(function(){
    $(".menu > li > a").css("background","initial")
    $(".submenu").stop().slideUp(100);
});

// $(".menu").mouseover(function(){
//     $(".submenu").stop().fadeIn(300);
// });
// $(".menu").mouseout(function(){
//     $(".submenu").stop().fadeOut(100);
// });