'use srtict;'
var QBase = {
  title : 'Тестирование общей направленности',
  description : 'на некоторые вопросы может быть несколько правильных ответов',
  questions : [
    {
      text : 'Какой сейчас век?',
      answers : [
        {answer: 'XX', correct: false},
        {answer: 'XXI', correct: true},
        {answer: 'XIX', correct: false},
        {answer: 'XXX', correct: false},
      ],
      mark : 10
    },
    {
      text : 'В каком году закончилась Великая отечественная война?',
      answers : [
        {answer: '1945', correct: false},
        {answer: '1944', correct: true},
        {answer: '1946', correct: false},
      ],
      mark : 10
    },
    {
      text : 'Один фут равен:',
      multiple : true,
      answers : [
        {answer: '31.48 см', correct: false},
        {answer: '12 дюймов', correct: true},
        {answer: '30.48 см', correct: true},
        {answer: '11 дюймов', correct: false},
      ],
      mark : 5
    },
    {
      text : 'Чему равно 2+2? (в 2-й СС и 16-й СС)',
      multiple : true,
      answers : [
        {answer: '101', correct: false},
        {answer: '100', correct: true},
        {answer: '04', correct: true},
        {answer: '05', correct: false},
      ],
      mark : 5
    },
  ]
}
