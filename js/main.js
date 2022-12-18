let mainHead = $('.main-head').offset().top;
let home = $('#home').offset().top;
$(window).scroll(function () {
    if ($(window).scrollTop() > mainHead) {
        $('.navbar').css({ 'backgroundColor': 'white', 'transition': '.5s' });
        $('.navbar').addClass('shadow','box-shadow-full');
        $('.nav-link').css({ 'color': 'black', 'transition': '.5s' });
        $('.navbar-brand img').attr('src','img/bakery-color.png')
    }
    else {
        $('.navbar').css({ 'backgroundColor': 'transparent', 'transition': '.5s' });
        $('.navbar').removeClass('shadow','box-shadow-full');
        $('.nav-link').css({ 'color': 'white', 'transition': '.5s' });
        $('.navbar-brand img').attr('src','img/bakery-light-1.png')
    }
    if ($(window).scrollTop() > home) {
        $('.up-icon').fadeIn(500);
    }
    else{
        $('.up-icon').fadeOut(200);
    }
});
$('.up-icon').click(function () {
    $('body,html').animate({scrollTop: 0},100)
})