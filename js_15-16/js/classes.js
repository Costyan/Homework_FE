'use strict';
var Human = {
  name  : 'Вася',
  age  : 30,
  sex   : 'мужчина',
  height: '1.8 м.',
  weight: '90 кг.'
};

var Worker = {
  __proto__   : Human,
  placeOfWork : 'Завод',
  wages       : 3000,
  units       : 'грн.',
  working     : function(days) {
    return (this.wages / 30) * days;
  },
}

var Student = {
  __proto__     : Human,
  placeOfStudy  : 'Университет',
  stipend       : 1500,
  units         : 'грн.',
  watchSerials  : function(serials) {
    return 'Я сейчас смотрю сериал: ' + serials;
  },
}

Worker.name = 'Петя';
Worker.age = 35;
Student.name = 'Коля';
Student.age = 19;

console.dir(Human);
console.log('Рабочего зовут: ', Worker.name);
console.log('Ему ', Worker.age, ' лет');
console.log('Рабочий отработал 20 дней и получил:', Worker.working(20));
console.log('Студента зовут: ', Student.name);
console.log('Ему ', Student.age, ' лет');
console.log(Student.watchSerials('Сотня'));
