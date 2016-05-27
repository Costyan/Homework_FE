// function convert() {
var myConvert = {
  convert: function() {
    var result = checked(arguments);
    if(result instanceof Array ) {
      var tmp1 = []
      var tmp2 = [];
      var obj = arguments[0];
      for(var k in obj) {
        tmp1.push(k);
        if(obj[k] == undefined) {
          tmp2.push('')
        } else {
        tmp2.push(obj[k]);
        }
      }
      result.push(tmp1, tmp2);
      return result;
    } else if(result instanceof Object) {
      var arr1 = arguments[0];
      var arr2 = arguments[1];
      for(var i = 0; i < arr1.length; i++) {
        if(arr1[i] == undefined || arr1[i] == '') return 'Имя свойства объекта не может быть пустым!';
        result[arr1[i]] = arr2[i];
      }
      return result;
    } else {
      return result;
    }

    function checked(arguments) {
      if(arguments[0] == undefined) return 'Данные не были введены!';
      if(arguments[0] instanceof Array &&
         arguments[0].length == 0) return 'Был введен пустой прервый массив!';
     if(arguments[1] !== undefined &&
        arguments[0] instanceof Array &&
        arguments[1] instanceof Array &&
        arguments[0].length < arguments[1].length) return 'Были введены массивы разной размерности!';
     if(arguments[1] !== undefined &&
        arguments[0] instanceof Array &&
        arguments[1] instanceof Array) return {};
      if(arguments[0] instanceof Array &&
         arguments[0] instanceof Object) return 'Вместо второго массива был введен объект!';
      if(arguments[0] instanceof Object &&
         Object.keys(arguments[0]).length == 0) return 'Был введен пустой обект!';
      if(arguments[0] instanceof Object) return [];
    }
  }
}
try {
  module.exports = myConvert;
} catch (e) {}
