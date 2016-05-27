var myConvert = require('../js/test.js');

describe("Тестирование функуии преобразующей массивы в объект или объект в массивы", function() {
  it("Тестирование проверки вводимых данных", function() {
    expect(myConvert.convert()).toEqual('Данные не были введены!');
    expect(myConvert.convert([], [1, 2])).toEqual('Был введен пустой прервый массив!');
    expect(myConvert.convert({})).toEqual('Был введен пустой обект!');
    expect(myConvert.convert([1, 2], {})).toEqual('Вместо второго массива был введен объект!');
    expect(myConvert.convert([1, 2], [1, 2, 3])).toEqual('Были введены массивы разной размерности!');
    expect(myConvert.convert([1, , 3], [1, 2, 3])).toEqual('Имя свойства объекта не может быть пустым!');
    expect(myConvert.convert([1, undefined, 3], [1, 2, 3])).toEqual('Имя свойства объекта не может быть пустым!');
  });
  it("Тестирование работы функции", function() {
    expect(myConvert.convert(['One', 'Two'], [1, 2])).toEqual({'One': 1, 'Two': 2});
    expect(myConvert.convert([1, 2], [])).toEqual({1: undefined, 2: undefined});
    expect(myConvert.convert([1, 2, 3], [1, ,3])).toEqual({1: 1, 2: undefined, 3: 3});
    expect(myConvert.convert({'One': 1, 'Two': 2})).toEqual([['One','Two'], [1, 2]]);
    expect(myConvert.convert({'One': 1, 'Two': undefined, 'Three': 3})).toEqual([['One', 'Two', 'Three'], [1, '', 3]]);
    expect(myConvert.convert({'One': 1, 'Two': '', 'Three': 3})).toEqual([['One', 'Two', 'Three'], [1, '', 3]]);
  });
});
