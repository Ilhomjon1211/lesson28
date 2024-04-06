class Person {
    #name;
    surname;
    #from;
    constructor (name, surname, age, from){
        this.#name = name;
        this.surname = surname;
        this.age = age;
        this.#from = from;
    }

    giveInformation(){
        return `${this.#name} is from ${this.#from}`;
    }
}
const person1 = new Person ("Mike", "Anderson", 34, "American");
const person2 = new Person ("Uilyam", "Jeknson", 19, "Scotland");
console.log(person1);
console.log(person1.giveInformation());
console.log(person2);
console.log(person2.giveInformation());
