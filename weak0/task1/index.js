class Bank{
  constructor(name){
    this.name=name;
    this.customers=[];
  }
  addCustomer(customer){
    this.customers.push(customer);
  }
  getTotalBalance(){
    let totalbalance=0;
    this.customers.forEach((customer)=>{
      totalbalance +=customer.balance;
    })
  return totalbalance;
  }
}
class Customer{
  constructor(name,accountNumber,balance){
    this.name=name;
    this.accountNumber=accountNumber;
    this.balance=balance;
  }
  deposit(depositValue){
    this.balance +=depositValue;
  }
  withdraw(withdrawValue){
    if(this.balance >= withdrawValue)
    {
      this.balance -=withdrawValue;
    }
    else{
      document.write("error");
    }
  }
  checkBalance (){
    return this.balance;
  }
}

const bank=new Bank("Bank");

const customer1=new Customer("yasmen",203,8000);
const customer2=new Customer("dalia",405,5000);
const customer3=new Customer("eman",390,90000);
const customer4=new Customer("amal",789,3000);

bank.addCustomer(customer1);
bank.addCustomer(customer2);
bank.addCustomer(customer3);
bank.addCustomer(customer4);

customer1.deposit(1000);
customer1.withdraw(500);

customer2.deposit(2000);
customer2.withdraw(2500);

customer3.deposit(6000);
customer3.withdraw(2000);

customer4.deposit(1200);
customer4.withdraw(900);


const C1balance=customer1.checkBalance();
document.write(`${customer1.name} _____ Balance equal ${C1balance} <br/> <br/>`);

const C2balance=customer2.checkBalance();
document.write(`${customer2.name} _____ Balance equal ${C2balance} <br/> <br/>`);

const C3balance=customer3.checkBalance();
document.write(`${customer3.name} _____ Balance equal ${C3balance} <br/> <br/>`);

const C4balance=customer4.checkBalance();
document.write(`${customer4.name} _____ Balance equal ${C4balance} <br/> <br/>`);

const bankBalance=bank.getTotalBalance();
document.write(`Total Balance ${bankBalance}`);


