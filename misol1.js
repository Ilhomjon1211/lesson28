class Calculator{
    add;
    substraction;
    multiplication;
    division;
    constructor(add, substraction, multiplication, division){
        this.add = add;
        this.substraction = substraction;
        this.multiplication = multiplication;
        this.division = division;

    }
    Add(){
        return this.add + this.substraction;
    }
    Multiple(){
        return this.multiplication * this.division;
    }
};
const result1 = new Calculator (2, 24, 25, 63);
console.log(result1.add + result1.substraction);
console.log("-=-=-=-=-=-=-=-=-=-");
console.log(result1.Add());

console.log(result1.multiplication * result1.division);
console.log("-=-=-=-=-=-=-=-=-=-");
console.log(result1.Multiple());