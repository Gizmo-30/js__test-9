let a = prompt('Введите имя')
let b = +prompt('Введите год рождения')
let c = +prompt('Введите нынешниий год')

function age(a,b,c) {
    let fn = (a + ', ваш возраст ' + (c-b) )
    return fn
}

console.log(age(a,b,c));