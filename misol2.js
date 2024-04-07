class BankAccount{
    #owner;
    balance;
    constructor(owner, balance){
        this.#owner = owner;
        this.balance = balance;
      
    }
    depositeBalance(deposite){
       return deposite + balance1.balance;
    }
    showBalance(){
        console.log(NewBalance);
    }
    outMoney(money){
       return myBalance - money;
    }
};

const balance1 = new BankAccount (5000, 6000)
console.log(balance1);
deposite=7000;
const myBalance = balance1.depositeBalance(deposite);
console.log(myBalance);
const NewBalance=balance1.outMoney(3000)
console.log("cashed out balance ", NewBalance);








// const balance1 = new BankAccount(5000, 8000);
// const myBalance = depositeBalance(2000) + balance1.balance;
// console.log(myBalance);
// const NewBalance=myBalance.depositeBalance(6000)
// // console.log(myBalance.balance);
// console.log(NewBalance);
// myBalance.showBalance()