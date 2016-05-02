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
