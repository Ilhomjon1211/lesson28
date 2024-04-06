class BankAccount{
    #owner;
    balance;
    constructor(owner, balance){
        this.#owner = owner;
        this.balance = balance;
      
    }
};
const myBalance = new BankAccount(5000, 8000);
console.log(myBalance);
console.log(myBalance.balance);