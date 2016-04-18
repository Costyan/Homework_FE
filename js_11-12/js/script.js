$(function() {
/////////////////// Карусель ///////////////////////////////////////////////////
  $('.myCarousel').myCarousel({
    // positionPlugin : 'left'
  });
  
/////////////////// Работа с шаблонизатором ////////////////////////////////////
  var tmpl = _.template(myTmpl);
  $('.templateTest').append(tmpl(user));
});
