
var myCard = ShoppingCart();
myCard.addProduct('phone',300);
myCard.deleteProduct('phone');
myCard.calcPrice();

class ShoppingCart {
    constructor() {
        this.products = [];
    }



    addProduct(Name, Price) {
        this.products.push({
            ProductName: Name,
            ProductPrice: Price
        });
    }
    deleteProduct(productName) {
        if (this.products.includes(productName)) {
            var index = this.products.findIndex((product) => product.Name == productName);
            this.products.splice(index);
        }
        else {
            console.log('item not found');
        }


    }

    calcPrice() {
        var totalPrice = 0;
        for (const item in this.products) {
            totalPrice += item.Price;
        }
        return totalPrice;
    }

}
