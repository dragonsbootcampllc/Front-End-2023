class Bank{
    constructor(name){
        this.name = name;
        this.customers  = [];
    }

    addCustomer(customer) {
        this.customers.push(customer);
    }

    getTotalBalance() {
        let totalBalance = 0;
        for (const customer of this.customers)
        {
            totalBalance += customer.balance;
        }
        return totalBalance;
    }

}

class Customer extends Bank {
    constructor(name,accountNumber,balance){
        super(name);
        this.accountNumber = accountNumber;
        this.balance = balance || 0
    }

    deposit(num){
        this.balance += num
    }

    withdraw(withdraw){
        this.balance >= withdraw ? this.balance-=withdraw : console.log("the balance is Insufficient");
    }
    checkBalance(){
        console.log(` ${this.name},Your Balance is ${this.balance}`);
    }
}


const myBank = new Bank("My Bank");


const customer1 = new Customer("Menna", 123456, 2000);
const customer2 = new Customer("Rewan", 789012, 5000);
myBank.addCustomer(customer1);
myBank.addCustomer(customer2);

customer1.checkBalance();
customer1.deposit(500);
customer1.checkBalance();
customer1.withdraw(3000);
customer1.checkBalance();

customer2.checkBalance();
customer2.deposit(500);
customer2.checkBalance();
customer1.withdraw(200);

console.log(`Total bank balance : ${myBank.getTotalBalance()}`);

