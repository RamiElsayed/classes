class Character {
    contructor(name, strength, hitPoints){
        this.name = name;
        this.strength =  strength;
        this.hitPoints = hitPoints;
    }

    printStats(){
        console.log(`\n\n Player Name: ${this.name}`);
        console.log(`Player Strength: ${this.strength}`);
        console.log(`Player HitPoints: ${this.hitPoints}\n\n`);
    };
    isAlive() {
        return this.hitPoints >= 0
    };

    attack(opponent) {
        opponent.hitPoints -= this.strength;
    };
}

const startGame = () => {
    let isPlayerOne = true;
    const player1 = new Character("Rami", 50, 100);
    const player2 = new Character("Ben", 20, 90);

    player1.printStats();
    player2.printStats();
    
const playGame = () => {
    if (!player1.isAlive() || !player2.isAlive()) {
        clearInterval(gameInterval);
        console.log("GAME OVER");
    }else if (isPlayerOne) {
        player1.attack(player2);

        player2.printStats();
    } else {
        player2.attack(player1);
        
        player1.printStats();
    }

    isPlayerOne = !isPlayerOne;
};

const gameInterval = setInterval(playGame, 2000);
};

startGame();