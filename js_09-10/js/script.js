function changeCheck(el) {
  var el = el,
  input = el.find('input').eq(0);
  if(input.attr('disabled')) return true;
  if(!input.attr('checked')) {
    el.css('background-position','0 -17px');
    input.attr('checked', true)
  } else {
    el.css('background-position','0 0');
    input.attr('checked', false)
  }
  return true;
}

function checkStart(el) {
  var el = el,
  input = el.find('input').eq(0);
  if(input.attr('disabled')) {
    el.css('background','url(img/checkbox-sprite-disabled-js.png)');
  }
  if(input.attr('checked')) {
    el.css('background-position','0 -17px');
  }
  return true;
}

$(function() {
/////////////////// Carousel ///////////////////////////////////////////////////
  $('.jcarousel').jcarousel({
    wrap: 'circular',
  });


  $('.jcarousel-control-prev').click(function() {
    $('.jcarousel').jcarousel('scroll', '-=1');
  });

  $('.jcarousel-control-next').click(function() {
    $('.jcarousel').jcarousel('scroll', '+=1');
  });

/////////////////// Select /////////////////////////////////////////////////////
  var params = {
    changedEl: 'select',
  }
  cuSel(params);

/////////////////// CheckBoxes via JQuery //////////////////////////////////////
  $('.jquery-checkbox').mousedown(function() {
    changeCheck($(this));
  });

  $('.jquery-checkbox').each(function() {
    checkStart($(this));
  });

/////////////////// DropDown menu //////////////////////////////////////////////
  $('a').click(function(e) {
    e.preventDefault();
  });

  $('.dropdown').hover(function() {
      if($(this).children('.submenu').queue().length == 0) $(this).children('.submenu').show(200);
    }, function () {
      if($(this).children('.submenu').queue().length == 0) $(this).children('.submenu').hide(200);
    }
  );
});
