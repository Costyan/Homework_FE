'use strict';
// var Human = {
//   name  : 'Вася',
//   age  : 30,
//   sex   : 'мужчина',
//   height: '1.8 м.',
//   weight: '90 кг.'
// };
function Human(name, age, sex, height, weight)  {
  this.name    = name || 'Вася';
  this.age     = age || 30;
  this.sex     = sex || 'муж.';
  this.height  = height || '1.8 м.';
  this.weight  = weight || '90 кг.';
  this.units   = 'грн.';
};

function Worker(name, age, sex, height, weight, placeOfWork, wages) {
  this.__proto__    = new Human();
  this.name         = name || this.name;
  this.age          = age || this.age;
  this.sex          = sex || this.sex;
  this.height       = height || this.height;
  this.weight       = weight || this.weight;
  this.placeOfWork  = placeOfWork || 'Завод';
  this.wages        = wages || 3000;
  this.working      = function(days) {
    return (this.wages / 30) * days + ' ' + this.units;
  };
};

function Student(name, age, sex, height, weight, placeOfStudy, stipend) {
  this.__proto__    = new Human();
  this.name         = name || this.name;
  this.age          = age || this.age;
  this.sex          = sex || this.sex;
  this.height       = height || this.height;
  this.weight       = weight || this.weight;
  this.placeOfStudy = placeOfStudy || 'Университет';
  this.stipend      = stipend || 1500;
  this.watchSerials = function(serials) {
    return serials;
  };
};

var Vasya_Human = new Human();
console.log(Vasya_Human);
var Petya_Human = new Human('Петя', 35, 'муж.', '1.9 м.');
console.log(Petya_Human);

var Vasya_Worker = new Worker();
console.log(Vasya_Worker);
console.log(Vasya_Worker.name + ' отработал 10 дней и получил', Vasya_Worker.working(10));
var Tolya_Worker = new Worker('Толя', 37, 'муж.', '1.7 м.');
console.log(Tolya_Worker);
console.log(Tolya_Worker.name + ' отработал 20 дней и получил', Tolya_Worker.working(20));

var Vasya_Student = new Student();
console.log(Vasya_Student);
console.log('Студент ' + Vasya_Student.name + ' смотрит сериал:',Vasya_Student.watchSerials('Сотня'));
var Olya_Student = new Student('Оля', 18, 'жен.', '1.5 м.', '45 кг.');
console.log(Olya_Student);
console.log('Студентка ' + Olya_Student.name + ' смотрит сериал:',Olya_Student.watchSerials('Рабыня Изаура'));
