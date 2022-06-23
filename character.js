class Character {
    contructor(name, strength, hitPoints){
        this.name = name;
        this.strength =  strength;
        this.hitPoints = hitPoints;
    }

    printStats();
    isAlive();
    attack();
}
const startGame = () => {
    let isPlayerOne = true;
    const player1 = new Character('Rami', 50, 100);
    const player2 = new Character('Ben', 20, 90);
    
const playGame = () => {
    if (!player1.isAlive() || !player2.isAlive()) {
        clearInterval(gameInterval);
        console.log("GAME OVER");
    }
    if (isPlayerOne) {
        player1.attack(player2);

        player2.printStats();
    } else {
        player2.attack(player1);
        
        player1.printStats();
    }
}

const gameInterval = setInterval(playGame, 2000);
}