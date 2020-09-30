(function ($) {

    $(document).ready(function(){

        $('.index_p, #star').delay(300).fadeIn(2000);

// 首頁點擊

        $('#star').click(function(){
            $('#star').animate({marginRight: '10px'}, 150).delay(300).animate({marginLeft:'1000px'}, 1500);
            $('.index-content').delay(500).fadeOut(1000);
            $('#index_page').delay(1500).fadeOut(1000);
        });

// nav 點擊事件

        $('#nav_1').click(function(){
            $('#page1').delay(200).fadeIn(300);
            $('#page1').siblings().fadeOut(200);$('.main_p, #imgdiv').delay(200).slideUp(0);
            $('.main_li').removeClass('main_li_click');
        });
        $('#m_nav_1').click(function(){
            $('#page1').fadeIn(0);
            $('#page1').siblings().fadeOut(0);
            $('.main_p, #imgdiv').slideUp(0);
            $('.main_li').removeClass('main_li_click');
            // close
            $('#close').fadeOut(300);
            $('.m_nav_bg').fadeOut(500);
            $('#m_nav').animate({marginLeft: '-180px'}, 700);
            $('#menu_button').animate({left: '-3px'}, 700);
        });
        //
        $('#nav_2').click(function(){
            $('#page2').delay(200).fadeIn(300);
            $('#page2').siblings().fadeOut(200);$('.main_p, #imgdiv').delay(200).slideUp(0);
            $('.main_li').removeClass('main_li_click');
        });
        $('#m_nav_2').click(function(){
            $('#page2').fadeIn(0);
            $('#page2').siblings().fadeOut(0);
            $('.main_p, #imgdiv').slideUp(0);
            $('.main_li').removeClass('main_li_click');
            // close
            $('#close').fadeOut(300);
            $('.m_nav_bg').fadeOut(500);
            $('#m_nav').animate({marginLeft: '-180px'}, 700);
            $('#menu_button').animate({left: '-3px'}, 700);
        });
        //
        $('#nav_3').click(function(){
            $('#page3').delay(200).fadeIn(300);
            $('#page3').siblings().fadeOut(200);$('.main_p, #imgdiv').delay(200).slideUp(0);
            $('.main_li').removeClass('main_li_click');
        });
        $('#m_nav_3').click(function(){
            $('#page3').fadeIn(0);
            $('#page3').siblings().fadeOut(0);
            $('.main_p, #imgdiv').slideUp(0);
            $('.main_li').removeClass('main_li_click');
            // close
            $('#close').fadeOut(300);
            $('.m_nav_bg').fadeOut(500);
            $('#m_nav').animate({marginLeft: '-180px'}, 700);
            $('#menu_button').animate({left: '-3px'}, 700);
        });
        //
        $('#nav_4').click(function(){
            $('#page4').delay(200).fadeIn(300);
            $('#page4').siblings().fadeOut(200);$('.main_p, #imgdiv').delay(200).slideUp(0);
            $('.main_li').removeClass('main_li_click');
        });
        $('#m_nav_4').click(function(){
            $('#page4').fadeIn(0);
            $('#page4').siblings().fadeOut(0);
            $('.main_p, #imgdiv').slideUp(0);
            $('.main_li').removeClass('main_li_click');
            // close
            $('#close').fadeOut(300);
            $('.m_nav_bg').fadeOut(500);
            $('#m_nav').animate({marginLeft: '-180px'}, 700);
            $('#menu_button').animate({left: '-3px'}, 700);
        });
        //
        $('#nav_5').click(function(){
            $('#page5').delay(200).fadeIn(300);
            $('#page5').siblings().fadeOut(200);$('.main_p, #imgdiv').delay(200).slideUp(0);
            $('.main_li').removeClass('main_li_click');
        });
        $('#m_nav_5').click(function(){
            $('#page5').fadeIn(0);
            $('#page5').siblings().fadeOut(0);
            $('.main_p, #imgdiv').slideUp(0);
            $('.main_li').removeClass('main_li_click');
            // close
            $('#close').fadeOut(300);
            $('.m_nav_bg').fadeOut(500);
            $('#m_nav').animate({marginLeft: '-180px'}, 700);
            $('#menu_button').animate({left: '-3px'}, 700);
        });
        

// <li> 點擊事件

        $('.main_li').click(function(){
            $(this).toggleClass('main_li_click').parent().siblings().find('.main_li').removeClass('main_li_click');
            $(this).parent().find('p').slideToggle(500);
            $(this).parent().siblings().find('p').slideUp(500);

            $(this).parent().find('#imgdiv').fadeToggle(500);
            $(this).parent().siblings().find('#imgdiv').fadeOut(500);
        });

        // 手機目錄按鈕

        $('#menu_button').click(function(){
            $('.m_nav_bg').fadeOut(0);
            $('.m_nav_bg, #close').fadeIn(300);
            $('#m_nav').animate({marginLeft: '180px'}, 500)
            $(this).delay(200).animate({left: '-50px'}, 700);
        });

        $('#close').click(function(){
            $('#close').fadeOut(300);
            $('.m_nav_bg').fadeOut(500);
            $('#m_nav').animate({marginLeft: '-180px'}, 500);
            $('#menu_button').animate({left: '-3px'}, 700);
        });

    });

})($)