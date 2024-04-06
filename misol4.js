class Animal {
name;
color;
type;
age;
tail;
sound;
constructor(name, color, type, age, ear, tail, sound){
    this.name = name;
    this.color = color;
    this.type = type;
    this.age = age;
    this.ear = ear;
    this.tail = tail;
    this.sound = sound;
}

}

class Dog extends Animal{
    constructor(name, color, type, age, ear, tail, sound){
        super(name, color, type, age, ear, tail, sound)
    }

}

class Cow extends Animal {
    constructor(name, color, type, age, ear, tail, sound, horn){
        super(name, color, type, age, ear, tail, sound)
    }

};

const dog = new Dog ("Abby", "gray", "pet", 3, 2, true, "Woff");
const cow = new Cow ("Nebula", "black", "pet", 10, 2, true, "Moo", 2);
console.log(dog);
console.log(cow);