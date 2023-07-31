class BankAccount {
    constructor(accountNumber, balance = 0, transactions = []) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.transactions = transactions;
    }

    deposit(amount) {
        this.balance += amount;
        const transaction = new Transaction(new Date(), amount, "deposit");
        this.transactions.push(transaction);
        return this.balance;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            return "No enough balance";
        }
        this.balance -= amount;
        const transaction = new Transaction(new Date(), amount, "withdraw");
        this.transactions.push(transaction);
        return this.balance;
    }

    addTransaction(transaction) {
        if (transaction.type === "deposit") {
            this.balance += transaction.amount;
        }

        if (transaction.type === "withdraw") {
            if (transaction.amount > this.balance) {
                return "No enough balance";
            }
            this.balance -= transaction.amount;
        }
        this.transactions.push(transaction);

        return this.balance;
    }

    calculateInterest(interestRate) {
        const interest = this.balance * interestRate;
        return interest;
    }
}

class Transaction {
    constructor(data, type, amount) {
        this.data = data;
        this.type = type;
        this.amount = amount;
    }
}

const bankAccount = new BankAccount("12345");

console.log(bankAccount);

const transaction = new Transaction(new Date(), "deposit", 200);
console.log(bankAccount.addTransaction(transaction));

console.log(bankAccount.calculateInterest(0.16));

console.log(bankAccount);
