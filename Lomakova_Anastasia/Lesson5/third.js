///шахматная доска

function draw() {
    let table = document.createElement('table');
    table.className = 'main_chessboard_class'
    let flag = true;

    let trr = document.createElement('tr');
    let arr = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    for (let i = 0; i < 8; i++) {
        let tr = document.createElement('tr');
        let tdd = document.createElement('td');
        tdd.className = 'square_ chess_text';
        tdd.innerHTML = 8 - i;
        tr.appendChild(tdd);

        for (let j = 0; j < 8; j++) {

            if (j == 0)
                flag = !flag;

            let td = document.createElement('td');
            if (flag) {
                td.className = 'square_ colour';
            } else
                td.className = 'square_ no_colour';

            tr.appendChild(td);
            flag = !flag;
        }
        table.appendChild(tr);
    }

    for (var k = 0; k < 9; k++) {

        var td = document.createElement('td');
        td.className = 'square_ no_colour chess_text';
        td.innerHTML = arr[k];

        trr.appendChild(td);

    }
    table.appendChild(trr);

    document.body.appendChild(table);
}

draw();


///корзина

/* class Shop_Item {
    constructor(item_name, item_price, item_currency, item_id) {
        this.item_name = item_name;
        this.item_price = item_price;
        this.item_currency = item_currency;
        this.item_id = item_id;

    }

    show() {
        console.log('Shop_Item-----------------', this.item_name, this.item_price);
    }

}



const item1 = new Shop_Item('Pen', 20, 'RUB', 1);
const item2 = new Shop_Item('Pencil', 15, 'RUB', 2);
const item3 = new Shop_Item('Copybook', 25, 'RUB', 3);
const item4 = new Shop_Item('Eraser', 5, 'RUB', 4);

let items = [item1, item2, item3, item4] */

const noMessageConatiner = document.querySelector('.error-empty');
const sendBtn = document.querySelector('.add_item');
const clearBtn = document.querySelector('.clear_cart');
const messagesConatiner = document.querySelector('.messages');

sendBtn.addEventListener('click', function () {
    const newItem = countBasket.countBasketPrice();
    console.log(newItem)
    const messageText = document.createElement('div');
    messageText.textContent = `Общая стоимость товаров:  ${newItem}`;
    //let clearing = removeChild(noMessageConatiner);
    messagesConatiner.appendChild(messageText);
});

const countBasket = {
    items: [{ item_name: "Pen", item_price: 20, item_count: 1 }, { item_name: "Pencil", item_price: 15, item_count: 2 }],
    countBasketPrice: function () {
        let amount = 0
        //   console.log(this.items[0].item_price)
        for (var i = 0; i < this.items.length; i++) {
            amount += (this.items[i].item_price * this.items[i].item_count);


        }
        console.log(amount)
        return amount
    }
}
clearBtn.addEventListener('click', function () {
    const messageText = document.createElement('div');
    messageText.textContent = `Корзина пустая`;
    messagesConatiner.replaceChild('', messageText);

});




//function countBasket() {

//      let amount = 0
// for (var i = 0; i < items.length; i++) {
//amount += (items[i].item_price * items[i].item_count);


//}
//return amount
//}

function showBlockNoText() {
    noMessageConatiner.style.display = 'block';
}
