function powViaCycle(x, y) {
  var result = 1;
  for (var i = 1; i<=y; i++) {
    result *=x;
  }
  return result;
}

function powViaRecursion (x, y) {
  if(y == 1) return x;
  return x * powViaRecursion(x, y-1);
}

var x = +prompt('Введите число');
var y = +prompt('Введите степень в которую нужно возвести ранее введенное число');

if(y < 0) {
  alert('Значение степени не может быть отрицательным!');
} else if(y == 0) {
    console.log('Result via cycle: ', powViaCycle(x, y));
  } else {
    console.log('Result via cycle: ', powViaCycle(x, y));
    console.log('Result via recursion: ', powViaRecursion(x, y));
  }

var names = [];
for(var i = 0; i <= 4; i++) {
  names[i] = prompt('Введите имя');
}
var curName = prompt('Введите имя пользователя');
var result = 'Такого пользователя нет!';
for(var key in names) {
  if(names[key] == curName) {
    result = names[key]+' , вы успешно вошли!';
  }
}
alert(result);
