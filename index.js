let sum=0
let cards=[]
let message = document.getElementById("message")
let isOver = false

function newGame(){
    isOver = false;
    let value1 = getRandomCard();
    let value2 = getRandomCard();
    cards=[value1,value2]
    sum=value1+value2;

    renderGame()
}

function renderGame(){
    document.getElementById("sum").textContent = "Sum: "+sum;
    document.getElementById("cards").textContent =  "Cards: ";
    cards.forEach((card)=>{
        document.getElementById("cards").textContent += card+" ";
    })

    if (sum <= 20) {
        message.textContent = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message.textContent = "You've got Blackjack!"
        isOver = true;
    } else {
        message.textContent = "You're out of the game!"
        isOver = true;
    }
}

function getRandomCard(){
    let value = Math.floor(Math.random()*13)+1;

    if(value>10){
        return 10;
    }else if(value===1){
        return 11;
    }else{
        return value;
    }
}

function newCard(){
    if(isOver===false){
        let value = getRandomCard();
        cards.push(value);
        sum+=value;
        renderGame()
    }
}
