// menu01

//**** 마우스오버  ****//
//서브메뉴 숨기고 시작
$(".subMenu").hide();
// 마우스 오버
$(".mainMenu").mouseover(function(){
$(".subMenu").stop().slideDown(300);
}).mouseout(function(){
$(".subMenu").stop().slideUp(300);
});


// menu02

$('.subMenu-02').hide();
// 마우스오버 메뉴
$('nav').mouseover(function () {
    $('.subMenu-02').stop().slideDown(300);
}).mouseout(function () {
    $('.subMenu-02').stop().slideUp(300);
});


// menu03

$('.main > li').mouseover(function(){
    $(this).find('.subMenu-03').stop().slideDown(500);
}).mouseout(function(){
    $(this).find('.subMenu-03').stop().slideUp(500);
});


// menu04

$('.main-02 > li').mouseover(function(){
    $(this).find('.subMenu-04').stop().slideDown(500);
}).mouseout(function(){
    $(this).find('.subMenu-04').stop().slideUp(500);
});

