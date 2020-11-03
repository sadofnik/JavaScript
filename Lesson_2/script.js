//********** Задание 1 **********//

var a = 1,
    b = 1,
    c, d;
c = ++a; // Префиксная форма записи. Аперанд 'a' увеличивается на 1, 'c = 2' и 'a = 2'
alert(c); // 2
d = b++; // Постфиксная форма записи. Сначала вернётся 'b = 1' и запишется в 'd'('d = 1'), после этого произойдёт инкрементация 'b'('b = 2') 
alert(d); // 1 
c = (2 + ++a); // После первой операции 'a = 2', далее идёт префиксаная форма и добавляется ещё 2. Получается (2 + (1+2)) 
alert(c); // 5
d = (2 + b++); // Постфиксная форма записи. Сначала вернётся 'd = (2 + 2)', после этого произойдёт инкрементация 'b'('b = 3') 
alert(d); // 4 
alert(a); // 3 
alert(b); // 3

//********** Задание 2 **********//

var a = 2;
var x = 1 + (a *= 2); // Присваивание с операцией умножения. В развёрнутом виде выгдядит так 'x = 1 + (a * 2)'
alert(x);

//********** Задание 3 **********//

var a = 0,
    b = 5;

if (a >= 0 && b >= 0)
    alert(a - b);
else if (a < 0 && b < 0)
    alert(a * b);
else
    alert(a + b);

//********** Задание 4 **********//

var a = prompt('Введите число от 0 до 15: ');

// так тоже работает 
// while (a <= 15) {
//     alert(a);
//     a = ++a;
// }

switch (a) {
    case '0':
        console.log(a);
        a = ++a;
    case '1':
        console.log(a);
        a = ++a;
    case '2':
        console.log(a);
        a = ++a;
    case '3':
        console.log(a);
        a = ++a;
    case '4':
        console.log(a);
        a = ++a;
    case '5':
        console.log(a);
        a = ++a;
    case '6':
        console.log(a);
        a = ++a;
    case '7':
        console.log(a);
        a = ++a;
    case '8':
        console.log(a);
        a = ++a;
    case '9':
        console.log(a);
        a = ++a;
    case '10':
        console.log(a);
        a = ++a;
    case '11':
        console.log(a);
        a = ++a;
    case '12':
        console.log(a);
        a = ++a;
    case '13':
        console.log(a);
        a = ++a;
    case '14':
        console.log(a);
        a = ++a;
    case '15':
        console.log(a);
    default:
        break;
}

//********** Задание 5 **********//

var num1 = parseInt(prompt('Введите первое число: '));
var num2 = parseInt(prompt('Введите второе число: '));

function addition(a, b) {
    const sum = a + b;
    return sum;
}

function subtraction(a, b) {
    const sum = a - b;
    return sum;
}

function multiplication(a, b) {
    const sum = a * b;
    return sum;
}

function division(a, b) {
    const sum = a / b;
    return sum;
}

console.log('Сложение ', addition(num1, num2));
console.log('Вычитание ', subtraction(num1, num2));
console.log('Умножение ', multiplication(num1, num2));
console.log('Деление ', division(num1, num2));

//********** Задание 6 **********//

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            result = arg1 + arg2;
            console.log('а и b разных знаков, вывести их сумму: ', result)
            break;
        case '*':
            result = arg1 * arg2;
            console.log('а и b отрицательные, вывести их произведение: ', result)
            break;
        case '-':
            result = arg1 - arg2;
            console.log('a и b положительные, вывести их разность: ', result)
            break;
        default:
            break;
    }
}

var a = parseInt(prompt('Введите первое число: ')),
    b = parseInt(prompt('Введите второе число: '));

if (a >= 0 && b >= 0)
    mathOperation(a, b, '-');
else if (a < 0 && b < 0)
    mathOperation(a, b, '*');
else
    mathOperation(a, b, '+');

//********** Задание 7 **********//

alert(null > 0); // (1) false
alert(null == 0); // (2) false
alert(null < 0); // (3) false
alert(null >= 0); // (4) true
alert(null <= 0); // (5) true
alert(null === 0); // (6) false

alert(null > undefined); // (1) false
alert(null == undefined); // (2) true
alert(null < undefined); // (3) false
alert(null >= undefined); // (4) false
alert(null <= undefined); // (5) false
alert(null === undefined); // (6) false

alert(undefined > 0); // (1) false
alert(undefined == 0); // (2) false
alert(undefined < 0); // (3) false
alert(undefined >= 0); // (4) false
alert(undefined <= 0); // (5) false
alert(undefined === 0); // (6)false

alert(undefined != 0); // (1)true
alert(undefined != null); // (2)false
alert(null != 0); // (3)true

// При сравнении всех возможных комбинаций значений "0", "null" и "undefined", можно сделать выводы, что undefined и null близки по сути больше
//  чем "0" с ними. Если таковые значения могут встречаться в программе, то необходимо делать дополнительные проверки на данные значения, чтобы
// избежать проблемы с неправильной логикой работы программы.

//********** Задание 8 **********//

var a = parseInt(prompt('Введите число: ')),
    b = parseInt(prompt('Введите степень: '))

function power(val, pow) {
    if (val <= 0 || pow <= 0 || !Number.isInteger(val, pow)) return 'Задайте целое положительное число';
    if (pow === 1) {
        return val;
    } else {
        return val * power(val, pow - 1);
    }
}

console.log(power(a, b));