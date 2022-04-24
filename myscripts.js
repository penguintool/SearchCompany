function CascadingCards() {
    var targetclass = $('.list').children();
    var targetlength = targetclass.length;
    var targetArray = $('.list').length;

        for (let i = 0; i < targetlength; i++) {
        if ( ( i + 1 ) % 5 === 1 ){
            targetclass.eq(i).addClass('name');
        }
        if ( ( i + 1 ) % 5 === 2 ){
            targetclass.eq(i).addClass('reserve');
        }
        if ( ( i + 1 ) % 5 === 3 ){
            targetclass.eq(i).addClass('post');
        }
        if ( ( i + 1 ) % 5 === 4 ){
            targetclass.eq(i).addClass('address');
        }
        if ( ( i + 1 ) % 5 === 0 ){
            targetclass.eq(i).addClass('tel');
        }
    }
}

function TextTypingAnime() {
    $('.TextTyping').each(function () {
        var elemPos = $(this).offset().top - 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var thisChild = "";
        if (scroll >= elemPos - windowHeight) {
            thisChild = $(this).children();
            thisChild.each(function (i) {
                var time = 100;
                $(this).delay(time * i).fadeIn(time);
            });
        } else {
            thisChild = $(this).children();
            thisChild.each(function () {
                $(this).stop();
                $(this).css("display", "none");
            });
        }
    });
}

function PageTop () {
    $('body,html').animate({
        scrollTop: 0
    }, 200 );
/*     return true */
}

$('.js-btn').on('click', function () {
    $('.header-navi, .header-navi__list, .header-btn__line').toggleClass('is-show');
});

$('.header-navi a[href^="#"]').on('click', function() {
    $('.js-btn').click();
});

$('.js-accordion .heading').click(function() {
    $(this).next('.content').slideToggle();
    $(this).toggleClass("open");
});

$('.company-nav__item').on('click', function() {

    var tabmenu = $(this).parents('.company-nav__list');
    tabmenu.children().removeClass('selected');
    $(this).addClass('selected'); 

    var index = $(this).index();
    var datatab = $(tabmenu).data('tab');
    var tabpanel = $('#' + datatab);
    tabpanel.children().removeClass('is-show');
    tabpanel.children().eq(index).addClass('is-show');

    var tabpanelTarget = tabpanel.children().eq(index);
    var tabpanelException = tabpanel.children();
    tabpanelException.children().removeClass('list');
    tabpanelException.children().removeClass('list is-close');
    tabpanelTarget.children().addClass('list');

    CascadingCards();
    PageTop();

});

$(window).scroll(function () {
    TextTypingAnime();
});

$(window).on('load', function () {

    var element = $(".TextTyping");
    element.each(function () {
        var text = $(this).html();
        var textbox = "";
        text.split('').forEach(function (t) {
            if (t !== " ") {
                textbox += '<span>' + t + '</span>';    
            } else {
                textbox += t;
            }
        });
        $(this).html(textbox);

    });

    TextTypingAnime();
});

$('#search-button').on('click', function () {

    var tabmenu = $('.company-nav__item').parents('.company-nav__list');
    var datatab = $(tabmenu).data('tab');
    var tabpanel = $('#' + datatab);

    var tabpanelch = tabpanel.children();
    tabpanelch.children().removeClass('list');
    tabpanelch.children().removeClass('list is-close');
    tabpanelch.children().addClass('list');

    CascadingCards();

    const textbox = document.getElementById("search-text")
    const keyword = textbox.value

    var targetclass = $('.list');
    var targetlength = targetclass.length;

    for (let i = 0; i < targetlength; i++) {
        var value = targetclass[i].innerHTML;

        if (value.includes(keyword)) {
        } else {
            targetclass.eq(i).addClass("is-close");
        }
    }

    PageTop();

});
