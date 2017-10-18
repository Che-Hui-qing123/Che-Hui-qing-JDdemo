  $('.delu_img').hover(function(){
           $(this).find('img').eq(0).stop().animate({
               'margin-left':'20px'
           })
           $(this).find('img').eq(1).removeClass('imgDis');
        },function(){
            $(this).find('img').eq(0).stop().animate({
               'margin-left':'10px'
           })
           $(this).find('img').eq(1).addClass('imgDis');
        })

        $('.saoma span').click(function(){
            $(this).siblings().removeClass('textHe');
            $(this).addClass('textHe');
            if($(this).text()=='账户登录'){
            $('form').removeClass('imgDis');
            $('.delu_img').addClass('imgDis');
            $('.img_text').addClass('imgDis');
            $('.smallIcon').addClass('opction');
            }else{
                $('form').addClass('imgDis');
            $('.delu_img').removeClass('imgDis');
            $('.img_text').removeClass('imgDis');
            $('.smallIcon').removeClass('opction');
            }
        })