$ = jQuery;
$(document).ready(function () {

    /* trình tải trước .preloader*/
    var preLoader;
    preLoader = document.querySelector('.preloader');
    if (preLoader !== null) {
        preLoader.style.opacity = 0;
        setTimeout(function () {
            preLoader.style.display = 'none';
        }, 5000);
    }

    /* thao tác menu cho .col-menu*/
    let navHeader = $('.navbar-header');
    navHeader.click(function () {
        $('.menu-box').slideToggle();
    });
    


    /* Ẩn/Hiện cho .langguage */
    $('.top__left--langguage-pay li.English a').click(function () {
        if (!$('.langguage').hasClass('show')) {
            $('.langguage').addClass('show');
            $('.langguage').show();
        } else {
            $('.langguage').removeClass('show');
            $('.langguage').hide();
        }
    });

    /* Ẩn/Hiện cho .currency */
    $('.top__left--langguage-pay li.USD a').click(function () {
        if (!$('.pay').hasClass('show')) {
            $('.pay').addClass('show');
            $('.pay').show();
        } else {
            $('.pay').removeClass('show');
            $('.pay').hide();
        }
    });

    /* Ẩn/Hiện cho .my-Account */
    $('.top__right--account-wish li.my-Account a').click(function () {
        if (!$('.acconut').hasClass('show')) {
            $('.acconut').addClass('show');
            $('.acconut').show();
        } else {
            $('.acconut').removeClass('show');
            $('.acconut').hide();
        }
    });

    /* Auto hình ảnh cho .main__slide */
    $('#main__slide').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });

    /* Auto hình ảnh cho #main__designer-introduce */
    $('#main__designer-introduce ').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });

    /* slider hình ảnh cho #favorite-brands */
    $('#favorite-brands').owlCarousel({
        loop: true,
        margin: 0,
        items: 5,
        dots: false,
        nav: true,
        navText: ['<div></div>', ' <div></div>'],
        responsiveClass:true,
        responsive: {
            0: {
                items: 2,
                nav:true
            },
            600: {
                items: 2,
                nav:true
            },
            1000: {
                items: 4,
                nav:true
            }
        },
    });

    /*Sự kiện onscroll*/
    var backToTop = $('.back-to-top');
    window.onscroll = function () {
        let position = window.scrollY;
        if (position >= 100) {
            backToTop.css('display', 'block');
            setTimeout(function () {
                backToTop.addClass('show');
            }, 600);
        } else {
            backToTop.removeClass('show');
            setTimeout(function () {
                backToTop.css('display', 'none');
            }, 600);
        }
    }

    /* Hành động khi click vào nút back-to-top */
    $('#scrollup').click(function (e) {
        e.preventDefault();
        let scrollToTop = setInterval(function () {
            let position = window.scrollY;
            position -= 20;
            window.scrollTo(0, position);
            if (position <= 0) {
                clearInterval(scrollToTop);
            }
        }, 10);
    });


});



