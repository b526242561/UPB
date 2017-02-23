/*home*/
$(".solution .modular").hover(function(){
    $(this).find('img').css('margin-top','90px');
    $(this).find('a').css('visibility','visible')
},function(){
    $(this).find('img').css('margin-top','125px');
    $(this).find('a').css('visibility','hidden')
});

/*to_top*/
var flag = true;
$("#to_top").on('click',function(){
    $('body').animate(
        {scrollTop:'0'},
        {easing: 'swing',speed: 'slow'});
});

/*banner*/
$('canvas').width($(window).width());

/*lunbo*/
var modular_wrap = $(".modular_wrap").width();
var translates  = $(".modular_wrap").css('-webkit-transform');
var translates_x = translates.split(",");
$("#lunbo .right_btn").on('click',function(){

    console.log(translates_x);
});