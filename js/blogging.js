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

// Animate read more button
$(document).ready(function() {
    $(".hidden").hide();
    $(".read_more_button").click(function(){
        $(".hidden").slideDown('slow');
        $(this).hide();
        $(".read_less_button").show();
    })
});

// Animate read less button
$(".read_less_button").click(function(){
    $(".hidden").hide('slow');
    $(this).hide();
    $(".read_more_button").show();
});