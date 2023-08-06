var myAccount = BankAccount(3479634, 'Ziad Saied', 58390);
myAccount.deposite(436);
myAccount.calculateInterest(0.02, 6);
myAccount.withdraw(500);
myAccount.transfer('Ziad',700);




class BankAccount {
    constructor(accountOwner, accountIban, accountNumber, balance,InterestRate) {
        this.accountNumber = accountNumber;
        this.accountIban = accountIban;
        this.accountOwner = accountOwner;
        this.InterestRate = InterestRate;
        this.balance = balance;
    }



    deposite(depositeMoney) {
        this.balance += depositeMoney;
        console.log('operation done succesfully');
    }

    withdraw(withdrowMoney) {
        if (this.balance >= withdrowMoney) {
            this.balance -= withdrowMoney;
            console.log('operation done succesfully');

        } else {
            console.log('You don\'t have enough balance');
        }

    }

    transfer(destination, transferMoney) {
        if (this.balance >= transferMoney) {
            this.balance -= transferMoney;
            console.log('Money transfered succesfully to: ' + destination);
        } else {
            console.log('You don\'t have enough balance');
        }
    }

    calculateInterest(timeInYears) {
        const interest = this.balance * this.InterestRate * timeInYears;
        console.log('interest = ' + interest)
    }

}
