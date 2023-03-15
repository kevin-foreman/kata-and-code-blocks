class Player {
    #powerUps = [];
    #name;
    #hp;

    constructor(name, hp) {
        this.#name = name;
        this.#hp = hp;
    }

    get name() {
        return this.#name;
    }

    getStarPowerUp() {
        this.#powerUps.push("star");
    }

    takeDamage() {
        if (!this.#powerUps.includes("star")) {
            this.#hp -= 1;
        }
    }
}