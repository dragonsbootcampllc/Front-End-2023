class ShoppingCart{
    constructor(){
        this.items = [];
    }

    addItem(name,price,quantity){
        //creating object with properties
        var item = {name,price,quantity}
        this.items.push(item);
    }

    removeItem(name){
        var index = this.items.findIndex(product => product.name === name);
        if(index >=0 ){ // or index not equal any negative number
            this.items.splice(index); //will remove all items with the same name given
            console.log(name + " is removed successfully");
        }else{
            // in case of HTML used we could use alert instead
            console.log('Product not found in the Cart');
        }
    }

    totalPrice(){
        let sum=0;
        this.items.forEach(product => {
            sum += product.price * product.quantity;
        })
        return "Total price of ur cart = " + sum +"$";
}
}

const newCart = new ShoppingCart();
newCart.addItem("tomato",5,6);
newCart.addItem("Apple",21,2);
newCart.addItem("milk",10,2);
console.log(newCart.totalPrice());
newCart.removeItem("milk");
console.log(newCart.totalPrice());

