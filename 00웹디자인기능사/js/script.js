// menu
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

// slide left
// let num = 0;
// function slideLeft(){
//     num++;
//     if(num == 4){
//         num=1;
//         $(".slide").css("left",0)
//     }
//     console.log(num)
//     $(".slide").animate({"left":-100*num+"%"},1000)
// }
// setInterval(slideLeft,3000);

// slide up
// let num = 0;
// function slideUp(){
//     num++;
//     if(num == 4){
//         num=1;
//         $(".slide").css("top",0)
//     }
//     console.log(num)
//     $(".slide").animate({"top":-100*num+"%"},1000)
// }
// setInterval(slideUp,3000)

// slide fade
let num = 0;
let depth = 0;
function slideFade(){
        num++;
        depth++;
        if(num == 4){
            num=1;
        }
        console.log(num)
        $(".slide .slide_item").eq(num).stop().animate({opacity:1},1000)
    }
setInterval(slideFade,3000)

// tab menu
$(".tab > div").click(function(e){
    e.preventDefault();
    let i = $(this).index()
    console.log("tab = " +i);
    $(".tab > div").removeClass("active");
    $(this).addClass("active")

    $(".content > ul").hide().eq(i).fadeIn();
});

// popup
$(".popup").click(function(e){
    e.preventDefault();
    $(".popView").fadeIn()
});
$(".close").click(function(){
    $(".popView").fadeOut()
}); //show, hide로도 사용