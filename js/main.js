    $(function(){
        'use strict';
        $(window).scroll(function(){
           var navbar = $('.navbar');
           if ($(window).scrollTop()>= navbar.height()){
            navbar.addClass('scrolled');
           } else{
            navbar.removeClass('scrolled');
           }
           // condition ? true : false;
           // if ($(window).scrollTop()>= navbar.height()){ ? navbar.addClass('scrolled') :navbar.removeClass('scrolled');
        });
    
    
    //Deal with Taps
    $('.tab-switch li').click(function(){
        $(this).addclass('selected').siblings.removeclass();
    });
    });