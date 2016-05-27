$(function() {
  let $tmplObj = $('#template');
  let template = _.template($tmplObj.html());
  $tmplObj.html('').remove();
  let $body = $('body');
  let $modal = $('<div class="modal"></div>');
  let $overlay = $('<div class="overlay"></div>');
  let $btnOk = $('<div class="end-test"><input type="button" id="btn-modal" value="Ok"></div>');
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
    let $user = $('#userName').val() || 'defaultUser';
    let $answers = $('input:checked');
    let historyTests = JSON.parse(localStorage.getItem('HistoryTests')) || new Object();
    let result = 0;
    for(var k = 0; k < $answers.length; k++) {
      let id =$answers.eq(k).attr('id');
      id = id.substring(id.indexOf('_')+1);
      let i = id.substring(0, 1);
      let j = id.substring(id.indexOf('_')+1);
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
    let id =$(this).attr('id');
    let i = id.substring(id.indexOf('_')+1, 8);
    if($(this).prop('checked') && !QBase.questions[i].multiple) {
      $(this).closest('.question').find('[type=checkbox]').prop('checked', false);
      $(this).prop('checked', true);
    }
  });
});
