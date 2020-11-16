'use strict';

const shoppingCart = {
    containerElement: null,
    listElements: null,

    goods: [{
            product: 'Яблоки',
            quantity: 5,
            price: 120
        },
        {
            product: 'Ананас',
            quantity: 2,
            price: 300
        },
        {
            product: 'Молоко',
            quantity: 3,
            price: 50
        },
        {
            product: 'Яйца',
            quantity: 4,
            price: 65
        },
        {
            product: 'Пиво',
            quantity: 10,
            price: 100
        },
    ],

    countBasketPrice() {
        let resPrice = 0;
        let resQuan = 0;
        for (let i = 0; i < this.goods.length; i++) {
            resPrice += this.goods[i].quantity * this.goods[i].price;
            resQuan += this.goods[i].quantity;
        }
        return `В корзине ${resQuan} позиции на сумму ${resPrice} рублей.`;
    },

    initList() {
        this.containerElement = document.getElementById('basket');
        this.containerElement.innerHTML = '';
        this.listElements = [];
        const olELem = document.createElement('ol');
        this.containerElement.appendChild(olELem);
        for (let row = 0; row < this.goods.length; row++) {
            const liElem = document.createElement('li');
            olELem.appendChild(liElem);
            this.listElements.push(liElem);
        }
    },

    render() {
        document.querySelector('ol').insertAdjacentHTML('afterend', '<div id="total_price"></div>');
        const totalPrice = document.getElementById('total_price');

        if (this.goods.length) {
            this.listElements.forEach((elem, ind) => {
                elem.innerHTML = `${this.goods[ind].product} ${this.goods[ind].quantity} ${this.goods[ind].price}`;
            });

            totalPrice.innerHTML = `${this.countBasketPrice()}`;
        } else {
            totalPrice.innerHTML = "Корзина пуста";
        }
    },


    run() {
        this.initList();
        this.render();
    }

};


shoppingCart.run();