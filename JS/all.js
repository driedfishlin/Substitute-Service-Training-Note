(function ($) {

    $(document).ready(function(){

// 首頁點擊

        $('#star').click(function(){
            $('#star').animate({marginRight: '10px'}, 150).delay(300).animate({marginLeft:'1000px'}, 1500);
            $('.index-content').delay(500).fadeOut(1000);
            $('#index_page').delay(1500).fadeOut(1000);
        });

// nav 點擊事件

        $('#nav_1, #m_nav_1').click(function(){
            $('#page1').removeClass('display_none');
            $('#page1').siblings().addClass('display_none');
            $('.main_p, #imgdiv').slideUp(0);
            $('.main_li').removeClass('main_li_click');

            // close
            $('#m_nav_all').fadeOut(300);
            $('#m_nav').animate({marginLeft: '-200px'}, 500);
        });

        $('#nav_2, #m_nav_2').click(function(){
            $('#page2').removeClass('display_none');
            $('#page2').siblings().addClass('display_none');
            $('.main_p, #imgdiv').slideUp(0);
            $('.main_li').removeClass('main_li_click');

            // close
            $('#m_nav_all').fadeOut(300);
            $('#m_nav').animate({marginLeft: '-200px'}, 500);
        });

        $('#nav_3, #m_nav_3').click(function(){
            $('#page3').removeClass('display_none');
            $('#page3').siblings().addClass('display_none');
            $('.main_p, #imgdiv').slideUp(0);
            $('.main_li').removeClass('main_li_click');

            // close
            $('#m_nav_all').fadeOut(300);
            $('#m_nav').animate({marginLeft: '-200px'}, 500);

        });

        $('#nav_4, #m_nav_4').click(function(){
            $('#page4').removeClass('display_none');
            $('#page4').siblings().addClass('display_none');
            $('.main_p, #imgdiv').slideUp(0);
            $('.main_li').removeClass('main_li_click');

            // close
            $('#m_nav_all').fadeOut(300);
            $('#m_nav').animate({marginLeft: '-200px'}, 500);            
        });

        $('#nav_5, #m_nav_5').click(function(){
            $('#page5').removeClass('display_none');
            $('#page5').siblings().addClass('display_none');
            $('.main_p, #imgdiv').slideUp(0);
            $('.main_li').removeClass('main_li_click');

            // close
            $('#m_nav_all').fadeOut(300);
            $('#m_nav').animate({marginLeft: '-200px'}, 500);            
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
            $('#m_nav_all').delay(0).css('display','initial');
            $('.m_nav_bg').delay(0).fadeIn(500);
            $('#m_nav').animate({marginLeft: '200px'}, 500)
        });

        $('#close').click(function(){
            $('#m_nav_all').fadeOut(300);
            $('#m_nav').animate({marginLeft: '-200px'}, 500);
        });

    });

})($)