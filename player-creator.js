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

// const ranks = ["Ensign", "Lieutenant", "Commander", "Captain", "Admiral"]

// function createStarFleetPersonnel(name, rank, department) {
//     // properties
//     // const obj {}
//     // #name
//     // properties hidden via closure
//     let rankAchievements = [];
//     let currentStanding = "good";
//     // let planetsVisited = [];

//     return {
//         name,
//         rank,
//         department,
//         // Methods
//         getAchievements() {
//             return rankAchievements;
//         },
//         getMostRecentAchievement() {
//             return rankAchievements[rankAchievements.length - 1];
//         },
//         addRankAchievement(achievement) {
//             rankAchievements.push(achievement);
//         },
//         getCurrentStanding() {
//             return currentStanding;
//         },
//         setCurrentStanding() {

//         },

//         requestPromotion(reviewer) {
//             // only allow promotion if reviewer is higher in rank
//             // give promotion if current standing is good and has 3 or more rank achievements
//             const prevRankIndex = ranks.indexOf(this.rank);
//             const reviewerRankIndex = ranks.indexOf(reviewer.rank);

//             if (reviewerRankIndex > prevRankIndex) {
//                 if (currentStanding == "good") {
//                     this.rank = ranks[prevRankIndex + 1];
//                     console.log(`${this.name} has been promoted from ${ranks[prevRankIndex]} to ${this.rank}`)
//                 } else {
//                     console.log(`${this.name} has been denied promotion to ${this.rank}`)
//                 }
//             } else {
//                 console.log(`${reviewer.name} does not have the authority to promote ${this.name}`)
//             }
//         }

//     };
// }

// const starFleetPerson1 = createStarFleetPersonnel("Sisko", "Captain", "Command");
// const starFleetPerson2 = createStarFleetPersonnel("Scotty", "Lieutenant", "Command");

// // starFleetPerson2.rank = "Captain";
// console.log(starFleetPerson2.rank); // Still Lieutenant
// starFleetPerson2.requestPromotion(starFleetPerson1);

// starFleetPerson1.requestPromotion(starFleetPerson2);