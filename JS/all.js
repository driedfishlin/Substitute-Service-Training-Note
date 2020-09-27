(function ($) {

    $(document).ready(function(){

// nav 點擊事件

        $('#nav_1').click(function(){
            $('#page1').removeClass('display_none');
            $('#page1').siblings().addClass('display_none');
            $('.main_p').slideUp(0);
        });

        $('#nav_2').click(function(){
            $('#page2').removeClass('display_none');
            $('#page2').siblings().addClass('display_none');
            $('.main_p').slideUp(0);
        });

        $('#nav_3').click(function(){
            $('#page3').removeClass('display_none');
            $('#page3').siblings().addClass('display_none');
            $('.main_p').slideUp(0);
        });

        $('#nav_4').click(function(){
            $('#page4').removeClass('display_none');
            $('#page4').siblings().addClass('display_none');
            $('.main_p').slideUp(0);
        });

        $('#nav_5').click(function(){
            $('#page5').removeClass('display_none');
            $('#page5').siblings().addClass('display_none');
            $('.main_p').slideUp(0);
        });

// <li> 點擊事件

        $('.main_li').click(function(){
            $(this).toggleClass('main_li_click').parent().siblings().find('.main_li').removeClass('main_li_click');
            $(this).parent().find('p').slideToggle(500);
            $(this).parent().siblings().find('p').slideUp(500);
        });


    });

})($)