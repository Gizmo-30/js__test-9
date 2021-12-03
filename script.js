do {
    var a = prompt('Введите имя')
} while (!isNaN(a));
do {
    var b = +prompt('Введите год рождения')
} while (isNaN(b));
do {
    var c = +prompt('Введите нынешниий год')
} while (isNaN(c));

function age(a,b,c) {
    let fn = (a + ', ваш возраст ' + (c-b) )
    return fn
}

console.log(age(a,b,c));