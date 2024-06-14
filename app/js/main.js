$(function() {
    $('.header__btn').on('click', function() {
        $('.rightside-menu').removeClass('rightside-menu--close');
    });

    $('.rightside-menu__close').on('click', function() {
        $('.rightside-menu').addClass('rightside-menu--close');
    });

    $('.header__btn-menu').on('click', function() {
        $('.menu').toggleClass('menu--open');
    });


    if($(window).width() < 539) {
        $('.works-path__item--measuring').appendTo($('.works-path__items-box'));
    } else if($(window).width() > 539) {
        $('.works-path__item--measuring').appendTo($('.works-path__items'));
    }
    
   



$('.top__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
});

$('.contact__slider-list').slick({
    slidesToShow: 10,
    slidesToScroll: 10,
    dots: true,
    arrows: false,
    autoplay: true,
    responsive: [
        {
          breakpoint: 1700,
          settings: {
            slidesToShow: 9,
            slidesToScroll: 6
            
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 4
            
          }
        },
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
            
          }
        },
        {
            breakpoint: 780,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 4,
              
            }
          },
        {
            breakpoint: 680,
            settings: {
              slidesToShow: 3,
              slidesToScroll:4,
              
            }
          },
          {
            breakpoint: 380,
            settings: {
              slidesToShow: 2,
              slidesToScroll:4,
              
            }
          }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});
 
var mixer = mixitup('.gallery__inner', {
    load: {
        filter: '.living'
    }
});

})


$('.blog__main-slider').slick({
    dots: false,
    arrows: true,
    fade: true,
    autoplay: true,

    prevArrow:'<button type="button" class="blog__arrows slick-prev"><img src="images/blog/back.svg" alt="back-img"></button>', 
    nextArrow:'<button type="button" class="blog__arrows slick-next"><img src="images/blog/next.svg" alt="next-img"></button>'
    
});


