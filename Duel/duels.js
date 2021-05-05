class Card {
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name,cost,power,resilience){
        super(name,cost);
        this.power = power;
        this.resilience = resilience;
    }
    attack(Unit){
        Unit.resilience -= this.power;
        if (Unit.resilience <= 0) {
            console.log(Unit.name + " has successfully been killed!");
        } else {
            console.log(Unit.name + " now has " + Unit.resilience + " resilience remaining.")
        }
    }
}

class Effect extends Card {
    constructor(name,cost,text,magnitude,stat) {
        super(name,cost);
        this.text = text;
        this.magnitude = magnitude;
        this.stat = stat;
    }
    target(Unit){
        Unit[this.stat] += this.magnitude;
        console.log(Unit.name + " now has " + Unit[this.stat] + " " + this.stat);
    }
}

const RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const BlackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

const HardAlgo = new Effect("Hard Algorithm",2,"increase target's resilience by 3", 2, "resilience");
const UnhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", -2, "resilience");
const PairProg = new Effect("Pair Programming",3,"increase target's power by 2", 2, "power");

HardAlgo.target(RedBeltNinja);

UnhandledPromiseRejection.target(RedBeltNinja);

PairProg.target(RedBeltNinja);

RedBeltNinja.attack(BlackBeltNinja);