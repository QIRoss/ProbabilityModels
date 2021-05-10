function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function factoryA(){
    const seed = getRandomInt(0,100);
    if(seed === 0)
        return 98;
    if(seed >= 1 && seed <= 3)
        return 99;
    if(seed >= 4 && seed <= 91)
        return 100;
    if(seed >= 92 && seed <= 97)
        return 101;
    if(seed >= 98 && seed <= 99)
        return 102;
}

function factoryB() {
    const seed = getRandomInt(0,100);
    if(seed >= 0 && seed <= 1)
        return 98;
    if(seed >= 2 && seed <= 5)
        return 99;
    if(seed >= 6 && seed <= 88)
        return 100;
    if(seed >= 89 && seed <= 96)
        return 101;
    if(seed >= 97 && seed <= 99)
        return 102;
}

//This shop is the simulation used by every model below
function buildBoxShop(totalBoxes){
    let boxes = [];
    for(let index=0;index<totalBoxes*0.45;index++)
        boxes.push([factoryA(),'A']);
    for(let index=0;index<totalBoxes*0.55;index++)
        boxes.push([factoryB(),'B']);
    return boxes;
}

//q2a
function probabilityOfHundredCapsFromA(totalBoxes){
    let boxes = buildBoxShop(totalBoxes);
    boxes = boxes.filter(i => i[0] == 100);
    const totalBoxesWithHundredCaps = boxes.length;
    boxes = boxes.filter(i => i[1] == 'A');
    return boxes.length/totalBoxesWithHundredCaps;

}

// q2a answer
// console.log(probabilityOfHundredCapsFromA(10000000));

// q2b
function probabilityOfBuyingABoxWithLessThanHundredCaps(totalBoxes){
    let boxes = buildBoxShop(totalBoxes);
    boxes = boxes.filter(i => i[0] < 100);
    return boxes.length/totalBoxes;
}

//q2b answer
// console.log(probabilityOfBuyingABoxWithLessThanHundredCaps(10000000));

// q2c
function probabilityOfBuyingABoxWithLessThanHundredCapsTwiceInThreeBuyings(totalBoxes, nSimulations){
    function buyingThreeBoxes(totalBoxes){
        let totalBoxesWithLessThanHundredCapsBought = 0;
        for(let index = 0; index < 3; index++){
            let boxes = buildBoxShop(totalBoxes);
            let randomBox = boxes[getRandomInt(0,boxes.length)];
            if(randomBox[0] < 100)
                totalBoxesWithLessThanHundredCapsBought++;
        }
        if (totalBoxesWithLessThanHundredCapsBought === 2)
            return true;
        return false;
    }
    let timesEventHappened = 0;
    for(let index = 0 ; index < nSimulations; index++)
        if(buyingThreeBoxes(totalBoxes) === true)
            timesEventHappened++;
    return timesEventHappened/nSimulations;
}

// q2c answer
// console.log(probabilityOfBuyingABoxWithLessThanHundredCapsTwiceInThreeBuyings(10000, 1000));