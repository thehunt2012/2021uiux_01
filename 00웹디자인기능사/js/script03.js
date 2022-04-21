// menu
$('.main').mouseover(function(){
    $(this).find('.sub').stop().slideDown(300);
}).mouseout(function(){
    $(this).find('.sub').stop().slideUp(300);
});

//slide
let num = 0;
let depth = 0;
function slideFade(){
    num++;
    depth++;
    if (num == 4){
        num = 1;
    }
    console.log(num)
    $(".sliderWrap .slider").eq(num).stop().animate({opacity: 1},1000)
}
setInterval(slideFade,3000)

//tab
$(".tab > div").click(function(e){
    e.preventDefault();
    let i = $(this).index();
    $(".tab > div").removeClass("active");
    $(this).addClass("active");

    $(".content > ul").hide().eq(i).fadeIn();
})
