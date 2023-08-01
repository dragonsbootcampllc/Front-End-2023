class BankAccount{
    constructor(Name , balance){
        this.Name = Name;
        this.balance = balance;
    }
    getSalary() {
        return `${this.Name} have a ${(this.balance)}$`;
    }
}

class transaction_bank extends BankAccount{
    constructor(Name , balance , deposit , withdraw){
        super (Name , balance );
        this.deposit = deposit ;
        this.withdraw = withdraw;
    }
    getDeposit(){
        return `${this.Name} have a ${(this.balance+=this.deposit)}$`;
    }
    getWithdraw () {
        if(this.withdraw > this.balance){
            return alert("Your Balance not Enough Your Withdraw");
        }
        else{
            return `${this.Name} have a ${(this.balance-=this.withdraw)}$`;
        }
    }
}

const transaction = {
    name : 'Abanoub Emad Felix',
    balance: 5000,
    deposit : 1200,
    withdraw : 500
}
const transaction1 = {
    name : 'Ehab',
    balance:2000,
    deposit : 1500,
    withdraw : 200
}

let new_bank = new BankAccount(transaction.name , transaction.balance);

console.log(new_bank.getSalary());

let transaction_bank_info = new transaction_bank(transaction.name,transaction.balance , transaction.deposit , transaction.withdraw);
let transaction_bank_info2 = new transaction_bank(transaction1.name,transaction1.balance , transaction1.deposit , transaction1,withdraw);

console.log(transaction_bank_info.getDeposit());
console.log(transaction_bank_info2.getDeposit());
console.log(transaction_bank_info.getDeposit());
console.log(transaction_bank_info2.getWithdraw());
console.log(transaction_bank_info.getWithdraw());
console.log(transaction_bank_info.getDeposit());
console.log(transaction_bank_info2.getDeposit());
console.log(transaction_bank_info.getDeposit());
console.log(transaction_bank_info2.getWithdraw());
console.log(transaction_bank_info.getWithdraw());
console.log(transaction_bank_info.getDeposit());
console.log(transaction_bank_info2.getDeposit());
console.log(transaction_bank_info.getDeposit());
console.log(transaction_bank_info2.getWithdraw());
console.log(transaction_bank_info.getWithdraw());
