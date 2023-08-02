
// step 2
class Bankaccount{
    
    constructor(accountNumber, accountName) {
      this.accountNumber = accountNumber;
      this.accountHolder = accountName;
      this.transactions = [];
    }
    addTransaction(transaction) {
      this.transactions.push(transaction);
    }
  
    calculateInterestRate() {
     const interestRate = 0.05;
      var balance = 0;
  
      for (const transaction of this.transactions) {
        balance += transaction.amount;
      }
      return   balance * interestRate;
    }
       calculateTotal() {
      var balance = 0;
      for (const transaction of this.transactions) {
        balance += transaction.amount;
        
      }
      return balance
    }
  }
  
  // step 3
  class transactions{
  constructor(kind,amount,date){
     this.kind=kind;
     this.amount=amount;
     this.date=date;
  }
  
  }
  // step 4
  const account1=new Bankaccount("00001","Mario Mina");
  const tras1=new transactions("deposit",2000,"8/1/2023");
  const tras2=new transactions("deposit",-200,"8/1/2023");
  account1.addTransaction(tras1);
  account1.addTransaction(tras2);
  
  // step 5
  const interestEarned = account1.calculateInterestRate();
  console.log("Interest Earned :", interestEarned);
   const total1 = account1.calculateTotal();
  console.log("Total = "+ total1+ " + " +interestEarned);
