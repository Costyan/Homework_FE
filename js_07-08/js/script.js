$(function() {
  /////////////////  Tabs
  $('.tab a').click(function(e) {
    e.preventDefault();
  });
  $('.tab').click(function() {
    $('.active').addClass('inactive').removeClass('active');
    $('.a-active').removeClass('a-active');
    $(this).children('.sub-tab').removeClass('inactive').addClass('active');
    $(this).children('a').addClass('a-active');
  });

/////////////////// Tooltips
  $('.field-value').hover(
    function() {
      $(this).siblings('.field-help').removeClass('show-all-helps--show').addClass('show-help').removeClass('show-all-helps--hide');
    },
    function() {
      $('.show-help').removeClass('show-help').addClass('show-all-helps--hide');
    }
  );
  $('.show-all-helps').click(function() {
    $('.field-help').addClass('show-all-helps--show').removeClass('show-all-helps--hide');
  });
  $('.hide-all-helps').click(function() {
    $('.field-help').addClass('show-all-helps--hide').removeClass('show-all-helps--show');
  });
});
