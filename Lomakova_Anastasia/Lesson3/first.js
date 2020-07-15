console.log("Hello, world!");
let num = 1;

while (num <= 100) {
    if (num == 1) {
        console.log(num)
    } else {
        let res = 2;
        let i = 2;
        while (num % i !== 0) {
            i += 1;
            res += 1;
        }
        if (res == num) {
            console.log(res);
        }
    }
    num += 1;
}

const basket = [
    ["Pen", 10, "RUB", 14],
    ["Pencil", 11, "RUB", 14],
    ["Copybook", 1, "RUB", 10],
    ["Ruler", 5, "RUB", 20]
]
//console.log(basket)

function countBasket(items) {
    let res = [];
    let amount = 0
    for (var i = 0; i < items.length; i++) {
        amount += (items[i][1] * items[i][3]);

    }
    return amount
}

console.log('Общая стоимость товаров: ', countBasket(basket), "RUB");


for (let i = 0; i <= 9; console.log(i), i++);
