$(document).ready(function() {
    var panels = $('.panel');
    var windowHeight = $(window).height();
    panels.height(windowHeight);
    
    $(window).resize(function() {
    var windowHeight = $(window).height();
    panels.height(windowHeight);
    });
    
    $(window).scroll(function() {
    var scrollPos = $(window).scrollTop();
    panels.each(function() {
    var panelPos = $(this).offset().top;
    var panelHeight = $(this).height();
    if (scrollPos >= panelPos - (windowHeight / 2) && scrollPos <= panelPos + panelHeight - (windowHeight / 2)) {
    $(this).addClass('active');
    } else {
    $(this).removeClass('active');
    }
    });
    });
    });