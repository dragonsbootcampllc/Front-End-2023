class BankAccount {
  constructor(accountNumber, accountOwner) {
    this.accountNumber = accountNumber
    this.accountOwner = accountOwner
    this.balance = 0
    this.transactions = []
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount
      this.transactions.push({ type: 'Deposit', amount })
      console.log(`You deposit ${amount}, Your balance now is ${this.balance}`)
    } else {
      console.log(`You can't deposit negative amount`)
    }
  }
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount
      this.transactions.push({ type: 'Withdraw', amount })
      console.log(`You withdraw ${amount}, Your balance now is ${this.balance}`)
    } else {
      console.log('You do not have enough money to withdraw ')
    }
  }

  calculateInterest(rate) {
    const interest = this.balance * (rate / 100)
    console.log(`Interest earned: ${interest}`)
    return interest
  }

  getBalance() {
    return this.balance
  }

  getTransactions() {
    return this.transactions
  }
}

// Create a new bank account and add a transaction.
const newAccount = new BankAccount('1234567890', 'Merhan Mostafa')
newAccount.deposit(1000)
newAccount.withdraw(500)
newAccount.deposit(800)

//  Calculate the interest earned
const interestRate = 2
console.log(newAccount.calculateInterest(interestRate))

const transactions = newAccount.getTransactions()
console.log(transactions)
