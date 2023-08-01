    class BankAccount{
    constructor(accountNumber,accountOwner,balance){
    this.accountNumber = accountNumber;
    this.accountOwner = accountOwner;
    this.balance = balance;
    }



    deposite(amount){
        if (typeof amount!== 'number') {
            console.log('Amount should be a number');
    }else{
        this.balance += amount;
        console.log("deposite = $" + amount);
    }
   
    }

    withdraw(amount){
        if(this.balance - amount < 0){
            console.log("Insufficient Funds")
        }else{
            this.balance -= amount;
            console.log("withdraw = $" + amount);
        }
        
    }

    // interest formula : I = P * R * T
    calculateInterest(rate,time){
        const interest = this.balance * rate * time;
        console.log('interest = $'+interest)
    }

}


const newAccount = new BankAccount(5786012,"Alex Wang",9855);
newAccount.deposite(1500);
newAccount.calculateInterest(0.05,2);
// newAccount.withdraw(80000); insufficient funds
newAccount.withdraw(800);
