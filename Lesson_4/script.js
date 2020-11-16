function getDigitsOfNumbers(num) {

    const obj = {};

    if (!Number.isInteger || num < 0 || num > 999) {
        console.log('Необходимо передать число от 0 до 999');
        return obj;
    }

    obj.unit = num % 10;
    obj.ten = Math.floor(num / 10) % 10;
    obj.hundred = Math.floor(num / 100);
    return obj;
}

console.log(getDigitsOfNumbers(123));

console.log('2. Корзина');

//shoppingCart = [[goods, price, count], ..]
const shoppingCart = {
    goods: [{
            product: 'shoes',
            quantity: 2,
            price: 12000
        },
        {
            product: 'coat',
            quantity: 1,
            price: 15000
        },
        {
            product: 'blazer',
            quantity: 3,
            price: 7000
        },
        {
            product: 'pants',
            quantity: 2,
            price: 8000
        },
        {
            product: 'hat',
            quantity: 5,
            price: 3000
        },
    ],

    countBasketPrice() {
        let result = 0;
        for (let i = 0; i < this.goods.length; i++) {
            result += this.goods[i].quantity * this.goods[i].price;
        }
        return 'Сумма корзины: ' + result;
    }

}

console.log(shoppingCart);

console.log(shoppingCart.countBasketPrice());