// Animate bio, experiences, accomplishments, and skills
$(window).on('scroll', function(e){
    var top = $(window).scrollTop() + $(window).height(),
    isbioseen = top > $('.bio').offset().top;
    isexpseen = top > $(".experiences").offset().top;
    isaccseen = top > $(".accomplishments").offset().top;
    isskillsseen = top > $(".skills").offset().top;
    if (isbioseen){
        $(".bio").addClass("animated bounceIn");
    }
    if (isexpseen){
        $(".experiences").addClass("animated bounceIn");
    }
    if (isskillsseen){
        $(".skills").addClass("animated bounceIn");
    }
    if (isaccseen){
        $(".accomplishments").addClass("animated bounceIn");
    }
});

// Animate "How it all started" words
var repeat = true;
$(window).on('scroll', function (e) {
    var top = $(window).scrollTop() + $(window).height(),
    isVisible = top > $('.season1').offset().top;
    if (isVisible && repeat){
        var textWrapper = document.querySelector('.season1');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: false})
            .add({
                targets: '.season1, .letter',
                scale: [4,1],
                opacity: [0,1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 950,
                delay: (el, i) => 70*i
            });
        repeat = false;
    }
});

// Animate "My life began to bloom" words
var repeat1 = true;
$(window).on('scroll', function (e) {
    var top = $(window).scrollTop() + $(window).height(),
    isVisible1 = top > $('.season2').offset().top;
    if (isVisible1 && repeat1){
        var textWrapper = document.querySelector('.season2');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter1'>$&</span>");

        anime.timeline({loop: false})
            .add({
                targets: '.season2, .letter1',
                scale: [4,1],
                opacity: [0,1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 950,
                delay: (el, i) => 70*i
            });
        repeat1 = false;
    }
});

// Animate "Seeking for adventures" words
var repeat2 = true;
$(window).on('scroll', function (e) {
    var top = $(window).scrollTop() + $(window).height(),
    isVisible2 = top > $('.season3').offset().top;
    if (isVisible2 && repeat2){
        var textWrapper = document.querySelector('.season3');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter2'>$&</span>");

        anime.timeline({loop: false})
            .add({
                targets: '.season3, .letter2',
                scale: [4,1],
                opacity: [0,1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 450,
                delay: (el, i) => 70*i
            });
        repeat2 = false;
    }
});

// Animate "Powered by strong determination" words
var repeat3 = true;
$(window).on('scroll', function (e) {
    var top = $(window).scrollTop() + $(window).height(),
    isVisible3 = top > $('.season4').offset().top;
    if (isVisible3 && repeat3){
        var textWrapper = document.querySelector('.season4');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter3'>$&</span>");

        anime.timeline({loop: false})
            .add({
                targets: '.season4, .letter3',
                scale: [4,1],
                opacity: [0,1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 950,
                delay: (el, i) => 70*i
            });
        repeat3 = false;
    }
});

// Animate .opening1 
var textWrapper2 = document.querySelector('.opening1');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter2'>$&</span>");

anime.timeline({loop: false})
    .add({
        targets: '.opening1, .letter2',
        scale: [3,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 1950,
        delay: (el, i) => 70*i
    });

// scroll down click function
$(document).ready(function(){
    $('.scrolldown').click(function(){
        $('html, body').slideDown().animate({
            scrollTop: $("div.wrapper").offset().top
        },500)
    });
}); 

// Scrolltop button at bottom right corner
$(document).ready(function(){
    $(".scrolltop-button").hide();
});

$(window).scroll(function(){
    if ($("html,  body").scrollTop() > 700){
        $(".scrolltop-button").fadeIn()
    }else{
        $(".scrolltop-button").fadeOut();
    }
});

$(".scrolltop-button").click(function(){
    $("html, body").animate({ 
        scrollTop: "0" 
    }, 1000); 
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

// Dark mode based on scrolltop implementation
/*$(window).scroll(function(){
    var scrolltop = $(this).scrollTop();
    var pageheight = $(document).height();
    
    //var body = document.body,
       //	html = document.documentElement;
    //var pageheight = Math.max( body.scrollHeight, body.offsetHeight, 
    //	html.clientHeight, html.scrollHeight, html.offsetHeight );
    var alpha =  scrolltop/pageheight;
    //var inv_alpha = 1-alpha;

    $(".bg-scroll").css('background-color', 'rgba(0, 0, 0,' +alpha+ ')');
    if (alpha > 0.45){
        $(".bg-scroll").css('color', 'white');
        $('hr').css('background-color', 'white');
        $(".scrolltop-button").css('-webkit-filter', 'invert(100%)');
        $(".github").css('-webkit-filter', 'invert(100%)');
    }else{
        $(".bg-scroll").css('color', 'black');
        $('hr').css('background-color', 'black');
        $(".scrolltop-button").css('-webkit-filter', 'invert(0%)');
        $(".github").css('-webkit-filter', 'invert(0%)');
    }
});*/