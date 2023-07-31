class BankAccount {
    constructor(accountNumber, accountHolder, interestRate = 5) {
      this.accountNumber = accountNumber;
      this.accountHolder = accountHolder;
      this.balance = 0;
      this.interestRate = interestRate;
      this.transactions = [];
    }
  
    deposit(amount) {
      if (amount <= 0) {
        throw new Error("Amount must be greater than zero.");
      }
      this.balance += amount;
      this.transactions.push({ type: "Deposit", amount });
    }
  
    withdraw(amount) {
      if (amount <= 0) {
        throw new Error("Amount must be greater than zero.");
      }
      if (amount > this.balance) {
        throw new Error("Insufficient balance.");
      }
      this.balance -= amount;
      this.transactions.push({ type: "Withdrawal", amount: -amount });
    }
  
    calculateInterest() {
      return (this.balance * this.interestRate) / 100;
    }
  
    displayAccountDetails() {
      document.getElementById("account-number").textContent = this.accountNumber;
      document.getElementById("account-holder").textContent = this.accountHolder;
      document.getElementById("balance").textContent = this.balance;
      document.getElementById("interest-rate").textContent = this.interestRate;
    }
  }
  
  const account = new BankAccount("123456789", "John Doe");
  
  const transactionForm = document.getElementById("transaction-form");
  transactionForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const amount = parseFloat(document.getElementById("amount").value);
    const transactionType = document.getElementById("transaction-type").value;
  
    try {
      if (transactionType === "deposit") {
        account.deposit(amount);
      } else if (transactionType === "withdraw") {
        account.withdraw(amount);
      }
  
      account.displayAccountDetails();
    } catch (error) {
      alert(error.message);
    }
  
    transactionForm.reset();
  });
  
