'use srtict;'
$(function() {
  var $tmplObj = $('#template');
  var template = _.template($tmplObj.html());
  $tmplObj.remove();
  var $body = $('body');
  var $modal = $('<div class="modal"></div>');
  var $overlay = $('<div class="overlay"></div>');
  var $btnOk = $('<div class="end-test"><input type="button" id="btn-modal" value="Ok"></div>');
  $body.append(template(QBase));

  function createModal(result) {
    $body.append($overlay);
    $body.append($modal);
    $modal.append('<h3>Вы прошли тест!</h3>');
    $modal.append('<div class="modal-text">Ваш результат: '+ result + ' баллов.</div>');
    $modal.append($btnOk);
    $('#btn-modal').focus();
    $('#btn-modal').click(removeModel);

  }

  function removeModel() {
    $modal.html('').remove();
    $overlay.html('').remove();
  };

  $('#answered').click(function() {
    var $user = $('#userName').val() || 'defaultUser';
    var $answers = $('input:checked');
    var historyTests = JSON.parse(localStorage.getItem('HistoryTests')) || new Object();
    var result = 0;
    for(var k = 0; k < $answers.length; k++) {
      var id =$answers.eq(k).attr('id');
      id = id.substring(id.indexOf('_')+1);
      var i = id.substring(0, 1);
      var j = id.substring(id.indexOf('_')+1);
      if(QBase.questions[i].answers[j].correct) {
        result += QBase.questions[i].mark;
      }
    }
    $answers.attr('checked', false);
    $('#userName').prop('value', '');
    historyTests[$user] = result;
    localStorage.setItem('HistoryTests', JSON.stringify(historyTests));
    createModal(result);
    console.log('History tests of all users', historyTests);
  });

  $('[type=checkbox]').click(function() {
    var id =$(this).attr('id');
    var i = id.substring(id.indexOf('_')+1, 8);
    if($(this).prop('checked') && !QBase.questions[i].multiple) {
      $(this).closest('.question').find('[type=checkbox]').prop('checked', false);
      $(this).prop('checked', true);
    }
  });
});
