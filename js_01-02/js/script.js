function powViaCycle(x, y) {
  var result = 1;
  for (var i = 1; i<=y; i++) {
    result *=x;
  }
  return result;
}

function powViaRecursion (x, y) {
  var result = 1;
  if(y == 1) {
    return x;
  } else {
    return x * powViaRecursion(x, y-1);
  }
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
for(var key in names) {
  if(names[key] == curName) {
    var result = names[key]+' , вы успешно вошли!';
  }
}
if(result === undefined) {
  alert('Такого пользователя нет!');
} else {
  alert(result);
}
