// task 2 
class shoppingchart {
  constructor(item1, item2, item3) {
    this.item1 = 50;
    this.item2 = 150;
    this.item3 = 220;
  }
  total() {
    return ` the Tptal price is ${this.item1 + this.item2 + this.item3} `;
  }
}
let items = new shoppingchart();
console.log(items.total());
