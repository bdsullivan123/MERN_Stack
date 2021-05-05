class Ninja {
    constructor(name, health, speed, strength){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(this.name);
    }
    showStats() {
        console.log(this.name, this.health, this.speed, this.strength);
    }
    drinkSake() {
        this.health += 10;
        console.log(this.name + " now has " + this.health + " health!");
    }
}

class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
const superSensei = new Sensei("Master Splinter");

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
superSensei.speakWisdom();
superSensei.showStats();