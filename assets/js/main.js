$(document).ready(function () {
  $('.header-menu__btn').on('click', function () {
    $(this).toggleClass('header-menu__btn--active');
    $('.header-menu__list').stop(true, true).fadeToggle(500);
  });
});

$(document).ready(function() {
  $('body').niceScroll();
});