class ShoppingCart {
  constructor() {
    this.items = []
  }

  static createItem(name, price, quantity) {
    return { name, price, quantity }
  }
  addItem(item) {
    this.items.push(item)
  }

  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1)
  }

  getTotalPrice() {
    let total = 0
    for (let item of this.items) {
      total += item.price * item.quantity
    }
    return total
  }

  getItems() {
    return this.items
  }
}

const cart = new ShoppingCart()

// Adding items to the cart
const item1 = ShoppingCart.createItem('TShirt', 20, 2)
const item2 = ShoppingCart.createItem('Jeans', 30, 1)
const item3 = ShoppingCart.createItem('Shoes', 50, 1)

cart.addItem(item1)
cart.addItem(item2)
cart.addItem(item3)

let totalPrice = cart.getTotalPrice()
console.log('Total Price:', totalPrice)
