// menu
$(".menu > li").mouseover(function(){
    $(this).css("background","red")
    $(this).find(".submenu").stop().slideDown(200);
});
$(".menu > li").mouseout(function(){
    $(".menu li").css("background","initial")
    $(".submenu").stop().slideUp(100);
});

// slider
let num = 0;
function sliderLeft(){
    num++;
    if(num == 4){
        num = 1;
        $(".slideWrap").css("left",0)
    }
    $(".slideWrap").animate({"left": -100*num +"%"},1000)
}
setInterval(sliderLeft,3000);

// tab
$(".tab > div").click(function(e){
    e.preventDefault();
    let i = $(this).index()
    console.log(i)
    $(".tab > div").removeClass("active");
    $(this).addClass("active");

    $(".content > ul").hide().eq(i).fadeIn();
});