$(function() {
/////////////////// Карусель ///////////////////////////////////////////////////
  $('.myCarousel').myCarousel({
    // positionPlugin : 'left'
  });

/////////////////// Работа с шаблонизатором ////////////////////////////////////
  var $template = $('#template').html();
  console.log($template);
  var tmpl = _.template($template);
  $('.templateTest').append(tmpl(user));
});
