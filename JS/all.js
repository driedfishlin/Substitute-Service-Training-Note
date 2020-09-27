(function ($) {

    $(document).ready(function(){

// nav 點擊事件

        $('#nav_1').click(function(){
            $('#page1').toggleClass('display_none');
        });

        $('#nav_2').click(function(){
            $('#page2').toggleClass('display_none');
        });

        $('#nav_3').click(function(){
            $('#page3').toggleClass('display_none');
        });

        $('#nav_4').click(function(){
            $('#page4').toggleClass('display_none');
        });

        $('#nav_5').click(function(){
            $('#page5').toggleClass('display_none');
        });

// <li> 點擊事件

        $('.main_li').click(function(){
            $(this).parent().find('p').slideToggle(500);
            // $(this).parent().siblings().find('div').addClass();
        });


    });

})($)