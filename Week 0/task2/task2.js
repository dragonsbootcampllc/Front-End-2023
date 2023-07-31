class ShoppingCart {
    constructor(name , price){
        this.name = name;
        this.price = price;
    }
    
}
class total_price extends ShoppingCart{
    constructor(name , price , balance ){
        super(name,price);
        this.balance=balance;
    }
    getBalance(quantity){
        this.balance+= (this.price * quantity);
        return this.balance;

    }
}

const item1 = {
    name: "Shirt",
    price: 19.90,
}
const item2 = {
    name: "Shoes",
    price: 20.90,
}
const item3 = {
    name: "dress",
    price: 25.90,
}
let cart_shopping2 = new total_price(item2.name, item2.price, 0);
let cart_shopping3 = new total_price(item3.name, item3.price, 0);
console.log(cart_shopping2.getBalance(2));
console.log(cart_shopping2.getBalance(2));
console.log(cart_shopping3.getBalance(3));
console.log(cart_shopping3.getBalance(3));
