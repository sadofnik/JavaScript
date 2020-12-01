'use strict';

console.log('2. Корзина');

const goods = [{
        product: 'shoes',
        quantity: 1,
        price: 12000
    },
    {
        product: 'coat',
        quantity: 1,
        price: 15000
    },
    {
        product: 'blazer',
        quantity: 1,
        price: 7000
    },
    {
        product: 'pants',
        quantity: 1,
        price: 8000
    },
    {
        product: 'hat',
        quantity: 1,
        price: 3000
    },
]

const shoppingCart = {
    containerElement: null,
    totalPrice: null,
    cartButton: null,
    checkGoodBasket: null,
    goods,
    goodBasket: [],

    countBasketPrice() {
        let resPrice = 0;
        let resQuan = 0;
        for (let i = 0; i < this.goodBasket.length; i++) {
            resPrice += this.goodBasket[i].quantity * this.goodBasket[i].price;
            resQuan += this.goodBasket[i].quantity;
        }
        return [resQuan, resPrice]
    },

    initList() {
        this.containerElement = document.getElementById('basket');

        this.cartButton = document.querySelector('.cart-btn');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));

        this.render();
    },

    render() {
        const colCount = ['', 'Наименование', 'Кол-во', 'Цена', 'Сумма'];
        const rowCount = this.goodBasket.length + 1;
        this.containerElement.innerHTML = '';

        if (this.goodBasket.length) {
            for (let row = 0; row < rowCount; row++) {
                const trELem = document.createElement('tr');
                this.containerElement.appendChild(trELem);

                for (let col = 0; col < colCount.length; col++) {
                    const cell = document.createElement('td');
                    if (row !== 0) {
                        if (col === 1) {
                            cell.innerHTML = this.goodBasket[row - 1].product;
                        } else if (col === 2) {
                            cell.innerHTML = `${this.goodBasket[row - 1].quantity} шт.`;
                        } else if (col === 3) {
                            cell.innerHTML = `${this.goodBasket[row - 1].price} руб.`;
                        } else if (col === 4) {
                            cell.innerHTML = `${this.goodBasket[row - 1].price * this.goodBasket[row - 1].quantity} руб.`;
                        }
                    }
                    trELem.appendChild(cell);

                    if (row === 0) {
                        cell.innerHTML = colCount[col];
                    }
                    if (col === 0 && row !== 0) {
                        cell.innerHTML = row;
                    }
                }
            }
            const totalPrice = this.countBasketPrice()
            this.containerElement.insertAdjacentHTML('beforeend', `В корзине ${totalPrice[0]} товаров на сумму ${totalPrice[1]} рублей`);
        } else {
            this.containerElement.innerHTML = "Корзина пуста";
        }
    },

    /**
     * Функция добавления в корзину получает название товара (лучше бы id)
     * @param {*} productName 
     * и ищет необходимые параметры в goods
     */

    addBasket(productName) {
        // реализовать добавление в корзину
        this.checkGoodBasket = this.goodBasket.find(elem => elem.product == productName);
        console.log(this.checkGoodBasket);
        if (this.checkGoodBasket) {
            console.log(this.checkGoodBasket.quantity++);
        } else {
            this.goodBasket.push(this.goods.find(item => item.product == productName));
        }

        this.render();
    },

    clearCart() {
        this.goods.forEach(good => {
                good.quantity = 1;
            })
            // this.checkGoodBasket = null;
        this.goodBasket = [];
        this.render();
    },

    run() {
        this.initList();
    },

};

const catalog = {
    catalogList: null,
    buyButton: null,
    goods,

    init() {
        this.catalogList = document.querySelector('.catalog_table');
        /* Получаю событие клика и передаю в функцию
         * обработки места события buttomClickHeandler
         */
        document.querySelector('.catalog_table')
            .addEventListener('click', (event) => {
                this.buttomClickHeandler(event);
            });
        // document.querySelector('.catalog_table')
        //     .addEventListener('click', (event) => {
        //         console.log(event);
        //         console.log(event.path[1].parentElement.children[0].innerHTML);;
        //     });

        this.render();
    },

    buttomClickHeandler(event) {
        if (event.target.tagName !== 'BUTTON') return;
        shoppingCart.addBasket(event.path[1].parentElement.children[0].innerHTML);
    },

    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.catalogList.insertAdjacentHTML('beforeend', this.cartProduct(good));
            });
        }
    },

    cartProduct(good) {
        return `<tr class="good">
        <td>${good.product}</td>
        <td>${good.price}</td>
        <td><button class="buy-button">Buy</button></td>
        </tr>`;
    },
};

catalog.init();
shoppingCart.run();

// var newLi = document.createElement("li");
// newLi.innerHTML = "Привет, мир!";
// list.appendChild(newLi);