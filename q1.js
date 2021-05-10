//min included, max not included
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function game(){
    for(let round = 0;;round++){
        let diceA = getRandomInt(1,7);
        let diceB = getRandomInt(1,7);
        if(diceA + diceB === 7){
            if(round%2===0)
                return 0;
            else
                return 1;
        }
    }
}

function probabilityOfFirstWinUsingNGames(nGames){
    let firstWins   = 0;
    let secondWins  = 0;
    for(let games = 0; games < nGames;games++){
        if(game() === 0)
            firstWins++;
        else
            secondWins++;
    }
    return firstWins/nGames;
}

console.log(probabilityOfFirstWinUsingNGames(100000000));