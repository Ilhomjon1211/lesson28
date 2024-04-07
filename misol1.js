class Calculator{
    add;
    substraction;
    multiplication;
    division;
    constructor(number1, number2){
        this.number1 = number1;
        this.number2 = number2;

    }
    Add(){
        return this.number1 + this.number2;
    }
    substract(){
        return this.number1 - this.number2;
    }
    multiple(){
        return this.number1 * this.number2;
    }
};
const numbers = new Calculator(24, 15);
const calculate1 = numbers.Add();
const calculate2 = numbers.substract();
console.log(calculate1);
console.log(calculate2);

