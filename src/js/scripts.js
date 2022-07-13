$(document).ready(function($) {
    var time = 2,
        cc = 1;
    var target = $('.footer');
    var targetPos = target.offset().top;
    var winHeight = $(window).height();
    var scrollToElem = targetPos - winHeight;
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 800, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

    if($('section.faq').length){
        $(".faq__item-header").click( function(e) {
            $(this).closest('.faq__item').toggleClass('active');
            $(this).find('.faq__item-btn svg .ver').fadeToggle(300);
            $(this).closest('.faq__item').find('.faq__item-answer').fadeToggle(300);
        });
    }

    if($('.header__burger').length){
        $(".header__burger-button").click( function(e) {
            $('.header__burger-menu').fadeToggle(300);
            $('body').toggleClass('lock');
        });

    }

    if($('section.customers').length){
        var CustomersSlider = new Swiper(".customers .swiper-container", {
            slidesPerView: 4,
            spaceBetween: 47,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".customers .swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 2,
                    spaceBetween: 40
                },
                1000: {
                    slidesPerView: 3,
                    spaceBetween: 40
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 40
                }
            }
        });
    }
    $('.counter').each(function() {
        var
            cPos = $(this).offset().top,
            topWindow = $(window).scrollTop();
        viewportHeight = $(window).height();
        if ((topWindow + viewportHeight) - cPos > viewportHeight / 6) {
            if (cc < 2) {
                $(".number").addClass("viz");
                $('span').each(function() {
                    var
                        i = 1,
                        num = $(this).data('num'),
                        step = 1000 * time / num,
                        that = $(this),
                        resultbig = 0;
                        resultsmall = 0;
                        int = setInterval(function() {
                            if (i <= num) {
                                if(i >= 1000){
                                    resultbig = Math.trunc(i / 1000);
                                    resultsmall = i - (resultbig * 1000);
                                    if(resultsmall < 100){
                                        that.html(resultbig + "," + '0' + resultsmall);
                                    } else {
                                        that.html(resultbig + "," + resultsmall);
                                    }

                                } else {
                                    that.html(i);
                                }

                            } else {
                                cc = cc + 2;
                                clearInterval(int);
                            }
                            i++;
                        }, step);
                });
            }
        }
    });
});