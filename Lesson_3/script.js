// Задание 1

let a = 1;
let list = [];

while (a <= 100) {
    if (a == 1) {
        list.push(1)
    } else {
        let result = 2;
        let i = 2;
        while (a % i !== 0) {
            i += 1;
            result += 1;
        }
        if (result == a) {
            list.push(result);
        }
    }
    a += 1;
}

console.log(list);


// Задание 2

var shoppingCart = [
    ['Яблоки', 120, 5],
    ['Ананас', 300, 2],
    ['Молоко', 50, 3],
    ['Яйца', 65, 4],
    ['Пиво', 100, 10]
];

console.log(shoppingCart);

function countBasketPrice(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i][1] * arr[i][2];
    }
    return result;
}

console.log('Стоимость товаров: ', countBasketPrice(shoppingCart));

// Задание 3

for (var i = 0; i < 10; console.log(i), i++) {}

// Задание 4

function PiramidHeight(count) {
    let i = 'x';
    while (i.length <= count) {
        console.log(i);
        i += 'x';
    }
}

PiramidHeight(20);