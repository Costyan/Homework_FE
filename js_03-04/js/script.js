var questions =[];

var constructorTest = {
  header: 'Тест по программированию',

  construct: function(numQuestionsForTest) {
    var element = document.createElement('h1');
    element.innerHTML = this.header;
    element.style.textAlign='center';
    document.body.appendChild(element);
    for (var i = 0; i <= numQuestionsForTest-1; i++) {
      var ul = document.createElement('ul');
      var questionKey = Object.keys(questions)[i]
      ul.innerHTML = (i+1) + '. ' + questionKey;
      for(var key in questions[questionKey]) {
        var li = document.createElement('li');
        li.classList.add('li--');
        var label = document.createElement('label');
        label.setAttribute('for', 'question'+(i+1)+'answer'+(+key+1));
        var checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('name', 'question'+(i+1));
        checkBox.setAttribute('id','question'+(i+1)+'answer'+(+key+1));
        label.appendChild(checkBox);
        var oldHTML = label.innerHTML;
        label.innerHTML = oldHTML + questions[questionKey][key];
        li.appendChild(label);
        ul.appendChild(li);
      }
      document.body.appendChild(ul);
    }
    var submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Проверить мои результаты');
    document.body.appendChild(submit);
  }
}

var numQuestions = +prompt('Введите количество вопросов');
var numQuestionsForTest = +prompt('Введите количество вопросов выводимых в тесте');

for(var i = 1; i <= numQuestions; i++) {
  questions['Вопрос №'+i] = ['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3'];
}

console.log('Все вопросы для теста:', questions);

constructorTest.construct(numQuestionsForTest);
