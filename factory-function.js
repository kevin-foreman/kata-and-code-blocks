// - Factory function with parameter and default values
function createMonster(name, power, hp = 20) {

    let attackTries = 3;

    return {
        name,
        power,
        hp,
        attack: function() {
            // do some attack
            if (attackTries > 0) {
                attackTries--;
                console.log(this.name, "attacks with the power " , this.power);
            } else {
                console.log("out of attacks")
            }
        }
    };
}

const monster2 = createMonster("steve", 15);
// Can use a for loop here instead of just using it a bunch, sure, Billy.
monster2.attack();
monster2.attack();
monster2.attack();
