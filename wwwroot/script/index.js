
$('.beijing').on({
    mouseover: function () {
        $('.beijing').css({
            'background-color': 'white',
            'border-right': '1px solid lightgray',
            'border-left': '1px solid lightgray',
            'border-top': '1px solid lightgray',
        })
        $('.cityW').css('display', 'block');
        $('#city>div span').click(function () {
            $('#city>div span').removeClass('showBg');
            $(this).addClass('showBg');
            $.cookie('city', $(this).text());
            location.reload();
        })
    }, mouseleave: function () {
        $('.cityW').css('display', 'none');
        $('.beijing').css({
            'background-color': '#e3e4e5',
            'border': 'none',
        })
    }
})
$('.cityW').on({
    mouseover: function () {
        $('.cityW').css('display', 'block')
        $('.beijing').css({
            'background-color': 'white',
            'border-right': '1px solid lightgray',
            'border-left': '1px solid lightgray',
            'border-top': '1px solid lightgray',
        })
    }, mouseleave: function () {
        $('.cityW').css('display', 'none');
        $('.beijing').css({
            'background-color': '#e3e4e5',
            'border': 'none',
        })
    }
})


var city = $.cookie('city')
$('.beijing').empty().append(`<span class="beiingh"></span><span>${city}</span>`);

// 登录时显示用户信息
var petname = $.cookie('petname');
if (petname) {
    $('.nihao').empty().append(`<span class=petname>${petname}</span><small class=tuichu>退出</small>`);
    $('.logins').empty().text(`${petname}`);
    $('.jingdonl').empty().html(`
            <a class=dengluImg></a>1140
            `).css({
            ' display': 'inline-block',
            width: '100px',
            heitght: '20px',
            'background-color': 'red',
            color: 'white',
            'border-radius': '5px'
        })
    $('.zhuce').empty();
    $('small.tuichu').empty();
    $('.tud').append(`<small class=tuichu>退出</small>`)
    $('.touxiang').empty().append(`
             <div class="touxiang_eru display">
                    <div class="touxiang_eru_top">
                        <a href="http://home.jd.com/">
                            <img class="J_upic_img" src="http://passport.jd.com/new/misc/skin/df/i/no-img_mid_.jpg" width="60" height="60">
                        </a>
                        <span class=touxiang_eru_top_left>
                            <a href="https://plus.jd.com/index" target="_blank" class="icon-plus-dropdown"></a>
                            <a href="https://plus.jd.com" target="_blank">试用PLUS会员领免运费券&gt;</a>
                        </span>
                        <small class=tuichu>退出</small>
                    </div>
                    
                    <div class=touxiang_eru_img>
                        <a href="/Login.html" target="_blank">
                            <i class="icobadage icobadage_plus"></i>          
                            <p class="u-name">免费试用</p>        
                        </a>
                        <a href="https://vip.jd.com/help.html#mypri-01" target="_blank">
                            <i class="icobadage icobadage_zymyf"></i>
                            <p class="u-name">自营运费补贴</p>
                        </a>
                        <a href="http://vip.jd.com/help.html#mypri-02" target="_blank">
                            <i class="icobadage icobadage_shfw"></i>
                            <p class="u-name">售后服务</p>
                        </a>
                        <a href="http://vip.jd.com/help.html#mypri-03" target="_blank">
                            <i class="icobadage icobadage_pjjl"></i>
                            <p class="u-name">评价奖励</p>
                        </a>
                        <a href="http://vip.jd.com/help.html#mypri-04" target="_blank">
                            <i class="icobadage icobadage_hytj"></i>
                            <p class="u-name">会员特价</p>
                        </a>
                        <a href="http://vip.jd.com/help.html#mypri-06" target="_blank">
                            <i class="icobadage icobadage_zjfw"></i>
                            <p class="u-name">装机服务</p>
                        </a>
                        <a href="http://vip.jd.com/help.html#mypri-05" target="_blank">
                            <i class="icobadage icobadage_srlb"></i>
                            <p class="u-name">生日礼包</p>
                        </a>
                        <a href="http://vip.jd.com/help.html#mypri-07" target="_blank">
                            <i class="icobadage icobadage_zxlb"></i>
                            <p class="u-name">专享礼包</p>
                        </a>
                        <a href="http://vip.jd.com/help.html#mypri-08" target="_blank">
                            <i class="icobadage icobadage_gbzx"></i>
                            <p class="u-name">贵宾专线</p>
                        </a>
                        <a href="http://vip.jd.com/help.html#mypri-09" target="_blank">
                            <i class="icobadage icobadage_yfq"></i>
                            <p class="u-name">运费券</p>
                        </a>
                    </div>
                    <div>
                        <span class=pre><</span>
                        <span class=next>></span>
                    </div>
                </div>

            `)
    $('.tuichu').on('click', function () {
        // 退出登录
        $.get('/signout', (data) => {
            if (data.code == 'success') {
                // 退出成功，刷新首页
                location.href = '/'
            }
        })
    })
}
if (petname == undefined) {
    $('.beijing').empty().append(`
    <span class="beiingh"></span><span>北京</span>
    `)
}



// 鼠标移动到头像上的时候
$('.petname').on({
    mousemove: function () {
        $('.touxiang_eru').removeClass('display');
        $('.petname').css({
            'display': 'inline-block',
            width: '60px',
            height: '31px',
            'background-color': 'white',
            'border-right': '1px solid lightgray',
            'border-left': '1px solid lightgray',
            'border-top': '1px solid lightgray',
            'text-align': 'center'
        })
    }, mouseleave: function () {
        $('.touxiang_eru').addClass('display');
        $('.petname').css({
            'background-color': '#e3e4e5',
            'border': 'none',
        })
    }
})
$('.touxiang_eru').on({
    mousemove: function () {
        $('.touxiang_eru').removeClass('display');
        $('.petname').css({
            'display': 'inline-block',
            width: '60px',
            height: '31px',
            'background-color': 'white',
            'border-right': '1px solid lightgray',
            'border-left': '1px solid lightgray',
            'border-top': '1px solid lightgray',
            'text-align': 'center'
        })
    }, mouseleave: function () {
        $('.touxiang_eru').addClass('display');
        $('.petname').css({
            'background-color': '#e3e4e5',
            'border': 'none',
        })
    }
})

var aCount = $('.touxiang_eru_img a').length;
var slideCount = 0;
if (aCount <= 4) {
    $('.pre').addClass('disabled')
}
$('.pre').click(function () {
    if (slideCount <= 0) {
        return;
    }
    slideCount--;
    console.log('sfsdf');
    $('.touxiang_eru_img').animate({
        left: '+=80'
    })
})
$('.next').click(function () {
    if (slideCount >= 5) {
        return;
    }
    slideCount++;
    $('.touxiang_eru_img').animate({
        left: '-=80'
    })
})

$('.listnav').find('p').on({
    mousemove: function () {
        if ($(this).index() == 0) {
            $('.cebiao').css('height', '540px');
        } else if ($(this).index() == 4) {
            $('.cebiao').css('height', '550px');
        } else if ($(this).index() == 7 || $(this).index() == 12) {
            $('.cebiao').css('height', '570px');
        } else if ($(this).index() == 3) {
            $('.cebiao').css('height', '530px');
        } else {
            $('.cebiao').css('height', '480px');
        }
        $(this).siblings().removeClass('bgP')
        $(this).addClass('bgP');
        $(this).siblings().find('span').css({
            color: 'white'
        })
        $(this).find('span').css({
            color: 'red',
        })
        $('.cebiao').removeClass('display');
        $('.jaidiana').empty();
        arr[1][$(this).index()].catePartL.channel.forEach(function (element) {
            $('.jaidiana').append(`
                    <a href='${element.link}'>${element.text}</a>
               `)
        });

        $('.botonj').empty()
        arr[1][$(this).index()].catePartL.detail.forEach(function (item, index) {
            $('.botonj').append(`
                    <p><a href='#' class=title>${item.tit.text}></a><span id=${index}></span></p>
                    `)
            item.con.forEach(function (element) {
                $(`#${index}`).append(`
                            <a href='${element.link}'>${element.text}</a>
                        `)
            })
        })
        $('.cebiao_img_one').empty();
        arr[1][$(this).index()].catePartR.brand.forEach(function (elemen) {
            $('.cebiao_img_one').append(`
                    <a href=${elemen.link}><img src=${elemen.img}></a>
                    `)
        })
        $('.cebiao_img_two').empty();
        arr[1][$(this).index()].catePartR.promo.forEach(function (elemen) {
            $('.cebiao_img_two').append(`
                    <a href=${elemen.link}><img src=${elemen.img}></a>
                    `)
        })

    }, mouseout: function () {
        $('.cebiao').addClass('display');
        $(this).removeClass('bgP');
        button($(this));
        $(this).find('span').css({
            color: 'white',
        })
    }
})

function button(temp) {
    $('.cebiao').on({
        mousemove: function () {
            $('.cebiao').removeClass('display')
            temp.siblings().removeClass('bgP');
            temp.addClass('bgP')
            temp.siblings().find('span').css({
                color: 'white',
            })
            temp.find('span').css({
                color: 'red',
            })

        }, mouseout: function () {
            $('.cebiao').addClass('display')
            temp.removeClass('bgP')
            temp.find('span').css({
                color: 'white',
            })
        }
    })
}




// 轮播图
var index = 0;
var teml = 0;
var timer = setInterval(changeIndex, 2000);

function changeIndex() {
    index = index >= $('.imgBox img').length - 1 ? 0 : index + 1;
    changeImage();
}
function changeImage() {
    $('.imgBox img').eq(index).fadeIn('fast').siblings().fadeOut('fast');
    $('.indicators span').eq(index).addClass('current').siblings().removeClass('current');
}
$('.indicators span').hover(function () {
    clearInterval(timer);
    index = $(this).index();
    changeImage();
}, function () {
    timer = setInterval(changeIndex, 1000);
})
$('.buttons span').hover(function () {
    clearInterval(timer);
}, function () {
    timer = setInterval(changeIndex, 1000);
})


// 横线滑动
$('.hover').find('a').on({
    mouseover: function () {
        if ($(this).text() == '促销') {
            $('.hr').stop().animate({
                left: '-63px'
            }, 500)
            $('.ul_distwo').removeClass('display');
            $('.ul_dis').addClass('display');
        }
        if ($(this).text() == '公告') {
            $('.hr').stop().animate({
                left: '-10px'
            }, 500)
            $('.ul_distwo').addClass('display');
            $('.ul_dis').removeClass('display');
        }

    }
})


// 图片sengsuo
$('.gri').on({
    mouseover: function () {
        $('.bjDiv').find('img').stop().animate({
            width: '990px'
        }, 100)
    }, mouseleave: function () {
        $('.bjDiv').find('img').stop().animate({
            width: '0px'
        }, 100)
    }
})
$('.bjDiv').on({
    mouseover: function () {
        $(this).find('img').stop().animate({
            width: '990px'
        }, 100)
    },
    mouseleave: function () {
        $(this).find('img').stop().animate({
            width: '0px'
        }, 100)
    }
})


$('.daohang').on({
    mouseover: function () {
        $('.daohang').css({
            'display': 'inline-block',
            'background-color': 'white',
            'heitght': '50px',
            'position': 'relative',
            'z-index': '110000',
            'border-right': '1px solid lightgray',
            'border-left': '1px solid lightgray',
            'border-top': '1px solid lightgray',
        })
        $('.wanzhan').css('display', 'block');
    }, mouseleave: function () {
        $('.wanzhan').css('display', 'none');
        $('.daohang').css({
            'background-color': '#e3e4e5',
            'border': 'none',
        })
    }
})
$('.wanzhan').on({
    mouseover: function () {
        $('.wanzhan').css('display', 'block');
        $('.daohang').css({
            'background-color': 'white',
            'border-right': '1px solid lightgray',
            'border-left': '1px solid lightgray',
            'border-top': '1px solid lightgray',
        })

    },
    mouseleave: function () {
        $('.wanzhan').css('display', 'none');
        $('.daohang').css({
            'background-color': '#e3e4e5',
            'border': 'none',
        })
    }
})


$('.fuwu').on({
    mouseover: function () {
        $('.fuwu').css({
            'display': 'inline-block',
            'background-color': 'white',
            'heitght': '50px',
            'position': 'relative',
            'z-index': '110000',
            'border-right': '1px solid lightgray',
            'border-left': '1px solid lightgray',
            'border-top': '1px solid lightgray',
        })
        $('.kehu').css('display', 'block');
    }, mouseleave: function () {
        $('.kehu').css('display', 'none');
        $('.fuwu').css({
            'background-color': '#e3e4e5',
            'border': 'none',
        })
    }
})
$('.kehu').on({
    mouseover: function () {
        $('.fuwu').css({
            'display': 'inline-block',
            'background-color': 'white',
            'position': 'relative',
            'z-index': '110000',
            'border-right': '1px solid lightgray',
            'border-left': '1px solid lightgray',
            'border-top': '1px solid lightgray',
        })
        $('.kehu').css('display', 'block');
    },
    mouseleave: function () {
        $('.kehu').css('display', 'none');
        $('.fuwu').css({
            'background-color': '#e3e4e5',
            'border': 'none',
        })
    }
})


$('.tableImag tr:nth-child(1) td').on({
    mousemove: function () {
        if ($(this).find('a').text() == '游戏') {
            return;
        }

        $('.tableImag').addClass('display');
        $('.huafei').slideUp();
        $('.huafei').css({
            'display': 'block'
        })

    }
})
$('.clos').click(function () {
    $('.huafei').css({
        'display': 'none'
    })
    $('.tableImag').removeClass('display');

})





$(window).scroll(function () {
    if ($(window).width() <= 1284) {
        $('#shortcut').css({
            width: '1284px',
        })
        $('#J_event').css({
            width: '1284px',
        })
    } else {
        $('#shortcut').css({
            width: '100%',
        })
        $('#J_event').css({
            width: '100%',
        })
    }


})
$(window).resize(function () {
    if ($(window).width() <= 1284) {
        $('#shortcut').css({
            width: '1284px',
        })
        $('#J_event').css({
            width: '1284px',
        })
    } else {
        $('#shortcut').css({
            width: '100%',
        })
        $('#J_event').css({
            width: '100%',
        })
    }
})

// 两张轮播图
var tej = 0;
$('.fbt_need_dong').empty();
msArr[0].boxBd.spItem.forEach(function (element, index) {
    $('.fbt_need_dong').append(`
            <a href=${element.link}>
                <img src=${element.img} class='a${index}Img'>
            </a>
            `)
});
setInterval(change, 1000);
function change() {
    tej = tej == 0 ? 1 : 0;
    changeImag();
}
function changeImag() {
    $('.fbt_need_dong a').eq(tej).siblings().find('img').fadeOut()
    $('.fbt_need_dong a').eq(tej).find('img').fadeIn()
    
    $('.fbt_need_dong_right').find('span').eq(tej).siblings().removeClass('showBg')
    $('.fbt_need_dong_right').find('span').eq(tej).addClass('showBg')
}

// 发现好货
 findArr[0].boxBd.item.forEach(function(element) {
            $('.find .fjb_con_bottom').append(`
            <li>
                <a href=${element.link}>
                    <p>${element.text}</p>
                    <img src=${element.img}>
                </a>
            </li>
            `)
        });

        $('.find .fjb_con_bottom').find('li').on({
            mousemove:function(){
                $(this).find('img').stop().animate({
                    left:'50px'
                })
            },mouseleave:function(){
                 $(this).find('img').stop().animate({
                    left:'65px'
                })
            }
        })

        // 点击轮播图
        var i=0;
        msArr[0].boxBd.item.forEach(function (element,index) {
            $('.swiper-wrapper').append(`<ul class=swiper-slide id=${index}></ul>`)
            element.forEach(function (item) {
                $(`#${i}`).append(`
                <li>
                    <div>
                        <a href=${item.link}>
                            <img src=${item.img}>
                            <p>${item.title}</p>
                        </a>
                    </div>
                    <p>${item.price}</p>
                </li>
                `)
            })
             i++;
             if(i>=index+2){
                 return;
             }
        });
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 30,
            loop: true
        });

        $('.swiper-slide').on({
            mousemove:function(){
                $('.swiper-button-next').removeClass('display')
                $('.swiper-button-prev').removeClass('display')
            },mouseout:function(){
                //  $('.swiper-button-next').addClass('display')
                // $('.swiper-button-prev').addClass('display')
            }
        })