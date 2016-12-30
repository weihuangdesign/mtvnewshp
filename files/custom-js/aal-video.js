$(window).scroll(function () {
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 600) sticky.addClass('fixed');
    else sticky.removeClass('fixed');

    var greybox = $('.greybox')

    if (scroll >= 600) greybox.addClass('fixed');
    else greybox.removeClass('fixed');

    var thinbox = $('.thinbox')

    if (scroll >= 600) thinbox.addClass('hide');
    else thinbox.removeClass('hide');

    var orangebox = $('.orangebox')

    if (scroll >= 600) orangebox.addClass('fixed');
    else orangebox.removeClass('fixed');

    var pinkbox = $('.pinkbox')

    if (scroll >= 600) pinkbox.addClass('fixed');
    else pinkbox.removeClass('fixed');

    var redbox = $('.redbox')

    if (scroll >= 600) redbox.addClass('fixed');
    else redbox.removeClass('fixed');

    var stickycontainer = $('.stickycontainer')

    if (scroll >= 600) stickycontainer.addClass('fixed');
    else stickycontainer.removeClass('fixed');

    var sharesgifit = $('#sharesgifit')

    if (scroll >= 600) sharesgifit.addClass('fixed');
    else sharesgifit.removeClass('fixed');

    var blackbox = $('.blackbox')

    if (scroll >= 600) blackbox.addClass('hide');
    else blackbox.removeClass('hide');
});

$(window).scroll(function () {
    var trending = $('#trending'),
        scroll = $(window).scrollTop();

    if (scroll >= 600) trending.addClass('fixed-trending');
    else trending.removeClass('fixed-trending');

});
