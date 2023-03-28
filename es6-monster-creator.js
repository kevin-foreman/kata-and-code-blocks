class Monster {
    constructor(name, power, hp = 20) {
        if (hp > 20) {
            power *= .5;
        };
        // set props
        this.name = name;
        this.power = power;
        this.hp = hp;
        this.attackTries = 3;
    };
    // define methods
    attack() {
        if (this.attackTries > 0) {
            this.attackTries--;
            console.log(this.name, "attacks with the power of", this.power);
            console.log("Attacks left: ", this.attackTries);
        } else {
            console.log("Out of attacks")
        };
    };

    rest() {
        if (hp < 5) {
            this.hp + 5;
        };
    };

    heal() {
        this.hp++
    };
};

class FireMonster extends Monster {
    constructor(name, power, hp = 20, temperature) {
        super(name, power, hp);
        this.name = "Firey-" + name;
        this.temperature = temperature;
        // this.attackTries = 2;
    };

    attack() {
        super.attack();
        console.log(`And now you will burn from my ${this.temperature}fire`)
    };
};

class WaterMonster extends Monster  {
    constructor(name, power, hp = 20, wetnessDegree) {
        super(name, power, hp);
        this.name = "Watery-" + name;
        this.wetnessDegree = wetnessDegree;
    };

    attack() {
        super.attack();
        console.log(`And now you will be soaking wet with my ${this.wetnessDegree} liquid!`)
    };
};

const monster1 = new Monster("Steve", "Slime");
// console.log(monster1);
const monster2 = new FireMonster("Jeff", "Lava", 20, "420 degrees");
// console.log(monster2);
// console.log(monster2.attack());
const monster3 = new WaterMonster("Bob", "Jets", 20, "Moist");
console.log(monster3.attack());