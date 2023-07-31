class ShoppingCart {
    constructor(items = []) {
        this.total = items.reduce(
            (total, item) => total + item.price * item.count,
            0
        );
        this.items = items;
    }

    addItem(item) {
        this.total += item.price * item.count;
        this.items.push(item);
        return this.total;
    }

    removeItem(id, count) {
        const item = this.items.find((item) => item.id === id);
        if (!item) {
            return "Item not found";
        }
        if (count >= item.count) {
            this.total -= item.price * item.count;
            this.items = this.items.filter((item) => item.id !== id);
        } else {
            item.count -= count;
            this.total -= item.price * count;
        }
        return this.total;
    }

    get calculateTotalPrice() {
        return this.total;
    }
}

class Item {
    constructor(id, price, count) {
        this.id = id;
        this.price = price;
        this.count = count;
    }
}

// Test

const shoppingCart = new ShoppingCart();
console.log(shoppingCart, "\n");

const item1 = new Item("1", 10, 2);
console.log(shoppingCart.addItem(item1));
console.log(shoppingCart, "\n");

const item2 = new Item("2", 13, 5);
console.log(shoppingCart.addItem(item2));
console.log(shoppingCart, "\n");

const item3 = new Item("3", 2, 1);
console.log(shoppingCart.addItem(item3));
console.log(shoppingCart, "\n");

console.log(shoppingCart.removeItem("3", 2));
console.log(shoppingCart, "\n");

console.log(shoppingCart.removeItem("2", 3));
console.log(shoppingCart, "\n");

console.log(shoppingCart.removeItem("5", 3));
console.log(shoppingCart, "\n");

console.log(shoppingCart.calculateTotalPrice);
