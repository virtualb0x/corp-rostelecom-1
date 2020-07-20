console.log("Hello, world!");
let num = 1;

const _num = {
    userNumber: 989,
    count: function () {
        if (this.userNumber > 0 && this.userNumber <= 999) {
            console.log('Сотни: ', Math.floor(this.userNumber / 100));
            console.log('Десятки: ', Math.floor((this.userNumber - ((Math.floor(this.userNumber / 100)) * 100)) / 10));
            console.log('Единицы: ', Math.floor(this.userNumber % 10));
            //console.log('Десятки: ', Math.floor(this.userNumber / 10));
            //      console.log('Единицы: ', this.userNumber);
            //},
            //  return  ; //?: - тернарный оператор условия
        } null;
    }
};
_num.count();

//Вариант 1
class Shop_Item {
    constructor(item_name, item_price, item_currency, item_count) {
        this.item_name = item_name;
        this.item_price = item_price;
        this.item_currency = item_currency;
        this.item_count = item_count;

    }

    show() {
        console.log('Shop_Item-----------------', this.item_name, this.item_price, this.item_count);
    }

}



const item1 = new Shop_Item('Pen', 10, 'RUB', 14);
const item2 = new Shop_Item('Pencil', 11, 'RUB', 14);
const item3 = new Shop_Item('Copybook', 1, 'RUB', 10);
const item4 = new Shop_Item('Ruler', 5, 'RUB', 20);

let items = [item1, item2, item3, item4]

function countBasket(items) {
    let res = [];
    let amount = 0
    for (var i = 0; i < items.length; i++) {
        amount += (items[i].item_price * items[i].item_count);


    }
    return amount
}

console.log('Общая стоимость каналов: ', countBasket(items))

