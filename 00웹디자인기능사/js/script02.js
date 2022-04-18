// menu
$(".mainmenu > li").mouseover(function(){
    $(this).children("a").css("background","#fff")
    $(this).find(".submenu").stop().slideDown(300);
});
$(".mainmenu > li").mouseout(function(){
    $(".mainmenu > li > a").css("background","initial")
    $(".submenu").stop().slideUp(100);
})

// slide
let num = 0;
function slideUp(){
    num++;
    if(num == 4){
        num = 1;
        $(".sliderWrap").css("top",0)
    }
    $(".sliderWrap").animate({"top":-100*num + "%"},1000)
}
// setInterval(slideUp,3000)

// tab menu
$(".tab > div").click(function(e){
    e.preventDefault();
    let i = $(this).index();
    $(".tab > div").removeClass("active")
    $(this).addClass("active")

    $(".content > ul").hide().eq(i).fadeIn();
})

// popup
$(".popup").click(function(e){
    e.preventDefault();
    $(".pop_background").fadeIn();
});
$(".close").click(function(){
    $(".pop_background").fadeOut();
})