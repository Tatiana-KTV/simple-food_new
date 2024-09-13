$(function () {

  $('.select-style').styler(),
    $('.product-section__input').styler(),


    $('.slider').slick({
      dots: true,
      focusOnSelect: true,
      arrows: true,
      infinite: false,
      appendDots: '.slider-navigation__dots',
      appendArrows: '.slider-navigation',
      nextArrow: '<button type="button" class="slider-arrows slider-navigation__arrow slider-navigation__arrow--prev"><svg class="slider-arrow__arrow-left" fill="#000"><use xlink:href="images/sprite.svg#icon-prev-arrow"></use></svg></button>',
      prevArrow: '<button type="button" class="slider-arrows slider-navigation__arrow slider-navigation__arrow--next"><svg class="slider-arrow__arrow-right" fill="#000"><use xlink:href="images/sprite.svg#icon-prev-arrow"></use></svg></button>',
      responsive: [{
        breakpoint: 560,
        settings: {
          dots: false,
        },
      }],
    });

  $('.menu__link, .logo').on('click', function (event) {
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  // let parent = document.querySelector('.pagination');
  // let menuItem = parent.querySelectorAll('.pagination__link');

  // parent.addEventListener('click', (event) => {
  //   let target = event.target;
  //   if (target.classList.contains('pagination__link')) {
  //     for (let i = 0; i < menuItem.length; i++) {
  //       menuItem[i].classList.remove('active');
  //     }
  //     target.classList.add('active');
  //     target.classList.add('pagination__disabled');
  //   }
  // });
});

const changeColor = document.querySelector('.menu');
changeColor.addEventListener('mousedown', (e) => {
  const activeClass = e.target;
  if (activeClass.tagName != 'A') return;
  changeColor.querySelector('.active') ?.classList.remove('active');
  activeClass.classList.add('active');
});

$(document).scroll(function (e) {
  $(window).scrollTop() > 60 ?
    $('.header__top').addClass('header-fixed') :
    $('.header__top').removeClass('header-fixed');
});

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.burger-menu');
  const bodyLock = document.querySelector('body');
  const burgerClose = document.querySelector(".burger-new");

  burger.addEventListener("click", () => {
    mobileMenu.classList.add("burger-menu--active");
    if (mobileMenu.classList.contains("burger-menu--active")) {
      bodyLock.classList.add("lock");
    }
  });

  burgerClose.addEventListener("click", () => {
    mobileMenu.classList.remove("burger-menu--active");
    bodyLock.classList.remove("lock");
  });

  document.addEventListener("click", function (e) {
    if (!mobileMenu.contains(e.target) && !burger.contains(e.target)) {
      mobileMenu.classList.remove("burger-menu--active");
      bodyLock.classList.remove("lock");
    }
  });

  mobileMenu.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const mobileBurger = document.querySelector('.top-filter__btn');
  const sideMenu = document.querySelector('.filter-menu');
  const bodyLock = document.querySelector('body');
  const sideMenuClose = document.querySelector(".filter-menu__close-btn");

  mobileBurger.addEventListener("click", () => {
    sideMenu.classList.add("filter-menu--active");
    if (sideMenu.classList.contains("filter-menu--active")) {
      bodyLock.classList.add("new-lock");
    }
  });

  sideMenuClose.addEventListener("click", () => {
    sideMenu.classList.remove("filter-menu--active");
    bodyLock.classList.remove("new-lock");
  });

  document.addEventListener("click", function (e) {
    if (!sideMenu.contains(e.target) && !mobileBurger.contains(e.target)) {
      sideMenu.classList.remove("filter-menu--active");
      bodyLock.classList.remove("new-lock");
    }
  });

  sideMenu.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});

$(window).on('load resize', function () {
  if ($(window).width() < 768) {
    $('.restorant__list:not(.slick-initialized)').slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
    });
  } else {
    $('.restorant__list.slick-initialized').slick('unslick');
  }
});

$(window).on('load resize', function () {
  if ($(window).width() < 768) {
    $('.promo__list:not(.slick-initialized)').slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
    });
  } else {
    $('.promo__list.slick-initialized').slick('unslick');
  }
});

$(function () {
  $('.product-section__star').rateYo({
    rating: 3.6,
    starWidth: '16px',
    spacing: '6px',
    readOnly: true,
    normalFill: '#C1C1C1',
    ratedFill: '#FFB800',
    starSvg: '<svg width = "16" height = "17" viewBox = "0 0 16 17" fill = "none" xmlns = "http://www.w3.org/2000/svg" > <g clip - path = "url(#clip0_20162_248)" ><path d = "M-0.237422 6.1941C-0.18246 6.02438 -0.0362377 5.9007 0.139802 5.87507L5.08522 5.15429L7.29693 0.659718C7.37564 0.499718 7.53812 0.398438 7.716 0.398438C7.89391 0.398438 8.05637 0.499718 8.1351 0.659718L10.3469 5.15429L15.2922 5.87507C15.4682 5.9007 15.6145 6.02438 15.6695 6.19407C15.7245 6.36379 15.6786 6.55007 15.5512 6.6746L11.9728 10.1732L12.8175 15.1132C12.8475 15.2891 12.7755 15.4668 12.6315 15.5717C12.5501 15.631 12.4537 15.6612 12.3568 15.6612C12.2824 15.6612 12.2077 15.6434 12.1394 15.6073L7.71603 13.2749L3.29288 15.6073C3.13538 15.6903 2.9446 15.6765 2.80068 15.5717C2.65677 15.4668 2.58464 15.289 2.61471 15.1132L3.4596 10.1732L-0.119179 6.67457C-0.246551 6.55007 -0.292446 6.36379 -0.237422 6.1941Z"/ ></g> <defs ><clipPath id = "clip0_20162_248" ><rect width = "16" height = "16" transform = "matrix(-1 0 0 1 16 0.0297852)" / ></clipPath> </defs> </svg>',

  });
});

$(function () {
  $('.review-content__client-star').rateYo({
    rating: 4,
    starWidth: '16px',
    spacing: '6px',
    readOnly: true,
    normalFill: '#C1C1C1',
    ratedFill: '#FFB800',
    starSvg: '<svg width = "16" height = "17" viewBox = "0 0 16 17" fill = "none" xmlns = "http://www.w3.org/2000/svg" > <g clip - path = "url(#clip0_20162_248)" ><path d = "M-0.237422 6.1941C-0.18246 6.02438 -0.0362377 5.9007 0.139802 5.87507L5.08522 5.15429L7.29693 0.659718C7.37564 0.499718 7.53812 0.398438 7.716 0.398438C7.89391 0.398438 8.05637 0.499718 8.1351 0.659718L10.3469 5.15429L15.2922 5.87507C15.4682 5.9007 15.6145 6.02438 15.6695 6.19407C15.7245 6.36379 15.6786 6.55007 15.5512 6.6746L11.9728 10.1732L12.8175 15.1132C12.8475 15.2891 12.7755 15.4668 12.6315 15.5717C12.5501 15.631 12.4537 15.6612 12.3568 15.6612C12.2824 15.6612 12.2077 15.6434 12.1394 15.6073L7.71603 13.2749L3.29288 15.6073C3.13538 15.6903 2.9446 15.6765 2.80068 15.5717C2.65677 15.4668 2.58464 15.289 2.61471 15.1132L3.4596 10.1732L-0.119179 6.67457C-0.246551 6.55007 -0.292446 6.36379 -0.237422 6.1941Z"/ ></g> <defs ><clipPath id = "clip0_20162_248" ><rect width = "16" height = "16" transform = "matrix(-1 0 0 1 16 0.0297852)" / ></clipPath> </defs> </svg>',
  });

  $('.form-star').rateYo({
    rating: 4,
    starWidth: '16px',
    spacing: '6px',
    readOnly: false,
    normalFill: '#C1C1C1',
    ratedFill: '#FFB800',
    starSvg: '< svg width = "16" height = "17" viewBox = "0 0 16 17" fill = "none" xmlns = "http://www.w3.org/2000/svg" > <g clip - path = "url(#clip0_20162_248)" ><path d = "M-0.237422 6.1941C-0.18246 6.02438 -0.0362377 5.9007 0.139802 5.87507L5.08522 5.15429L7.29693 0.659718C7.37564 0.499718 7.53812 0.398438 7.716 0.398438C7.89391 0.398438 8.05637 0.499718 8.1351 0.659718L10.3469 5.15429L15.2922 5.87507C15.4682 5.9007 15.6145 6.02438 15.6695 6.19407C15.7245 6.36379 15.6786 6.55007 15.5512 6.6746L11.9728 10.1732L12.8175 15.1132C12.8475 15.2891 12.7755 15.4668 12.6315 15.5717C12.5501 15.631 12.4537 15.6612 12.3568 15.6612C12.2824 15.6612 12.2077 15.6434 12.1394 15.6073L7.71603 13.2749L3.29288 15.6073C3.13538 15.6903 2.9446 15.6765 2.80068 15.5717C2.65677 15.4668 2.58464 15.289 2.61471 15.1132L3.4596 10.1732L-0.119179 6.67457C-0.246551 6.55007 -0.292446 6.36379 -0.237422 6.1941Z" fill = "black" / ></g> <defs ><clipPath id = "clip0_20162_248" ><rect width = "16" height = "16" fill = "white" transform = "matrix(-1 0 0 1 16 0.0297852)" / ></clipPath> </defs> </svg>'
  });
});

$('.product-section__tabs-item').on('click', function (e) {
  e.preventDefault();
  $('.product-section__tab-content').removeClass('product-section__tab-content--active');
  $($(this).attr('href')).addClass('product-section__tab-content--active');
});

$('.product-section__tabs-item').on('click', function (e) {
  e.preventDefault();
  $('.product-section__tabs-item').removeClass('active');
  $(this).addClass('active');
});

$('.recent__slider').slick({
  dots: false,
  arrows: true,
  slidesToShow: 5,
  infinite: false,
  responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 5,
        dots: true,
        arrows: false,
      }
    },
  ],

  appendDots: '.recent__slider-dots',
  appendArrows: '.recent__slider-arrow',
  prevArrow: '<button type="button" class="slider-arrows recent__slider-arrows recent__slider-arrows--prev"><svg class="slider-arrow__arrow-right" fill="#000"><use xlink:href="images/sprite.svg#icon-prev-arrow"></use></svg></button>',
  nextArrow: '<button type="button" class="slider-arrows recent__slider-arrows recent__slider-arrows--next"><svg class="slider-arrow__arrow-left" fill="#000"><use xlink:href="images/sprite.svg#icon-prev-arrow"></use></svg></button>',
});

var $range = $(".price-slider__input"),
  $inputFrom = $(".price-slider__input-from"),
  $inputTo = $(".price-slider__input-to"),
  instance,
  min = 0,
  max = 1200,
  from = 0,
  to = 0;

$range.ionRangeSlider({
  skin: "round",
  type: "double",
  min: min,
  max: max,
  from: 100,
  to: 1000,
  onStart: updateInputs,
  onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs(data) {
  from = data.from;
  to = data.to;

  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);
}

$inputFrom.on("input", function () {
  var val = $(this).prop("value");

  if (val < min) {
    val = min;
  } else if (val > to) {
    val = to;
  }

  instance.update({
    from: val
  });
});

$inputTo.on("input", function () {
  var val = $(this).prop("value");


  if (val < from) {
    val = from;
  } else if (val > max) {
    val = max;
  }

  instance.update({
    to: val
  });
});

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.popular-category__content')) {
    var mixer = mixitup('.popular-category__content');
  }

  if (document.querySelector('#myCarousel')) {
    const myCarousel = new Carousel(document.querySelector('#myCarousel'), {
      Dots: false,
    });

    Fancybox.bind('[data-fancybox="gallery"]', {
      Thumbs: false,
      Toolbar: false,
      closeButton: "top",
      Carousel: {
        Dots: true,
        on: {
          change: (that) => {
            myCarousel.slideTo(myCarousel.findPageForSlide(that.page), {
              friction: 0,
            });
          },
        },
      },
    });
  }
});
