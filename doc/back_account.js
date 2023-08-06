class BankAccount {
    constructor(name, balance) {
      this.name = name;
      this.balance = balance;
    }
    deposit(amount) {
      this.balance += amount;
    }
    withdraw(amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
      } else {
        console.log('No enough.');
      }
    }
    transfer(otherAccount, amount) {
      if (this.balance >= amount) {
        this.withdraw(amount);
        otherAccount.deposit(amount);
      } else {
        console.log('No enough.');
      }
    }
  }
  
  let account1 = new BankAccount('laila', 1000);
  let account2 = new BankAccount('mohamed', 500);
  account1.transfer(account2, 250);
  console.log(account1.balance); 
  console.log(account2.balance); 
