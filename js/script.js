// initialize aos
AOS.init();

// prealoader
$(document).ready(() => {
  $('#preloader').fadeOut();
});

// typed.js text animation
const typed = new Typed('.typed', {
  strings: ['Website.^1000', 'Social Marketing.^1000', 'Web Agency.^1000'],
  typeSpeed: 80,
  loop: true,
});

// sroll active
const scrollActive = () => {
  if ($(window).scrollTop() > 130) {
    $('.navbar').addClass('scroll-active');
    $('.hero').addClass('hero-scroll-active');
    $('.back-to-top').fadeIn();
  } else {
    $('.navbar').removeClass('scroll-active');
    $('.hero').removeClass('hero-scroll-active');
    $('.back-to-top').fadeOut();
  }
};

$(window).scroll(() => {
  scrollActive();
});

scrollActive();

// Back to top
$('.back-to-top').click(() => {
  window.scrollTo(0, 0);
});
