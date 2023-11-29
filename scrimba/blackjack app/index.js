let firstCard = Math.floor(Math.random() * 10 + 2);
let secondCard = Math.floor(Math.random() * 10 + 2);
let cards = [firstCard, secondCard]; // array of cards
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame(){
    renderGame();
}

function renderGame(){
    if (sum <= 21){
        message = "Do you want to draw a new card?";
        
    }else if (sum === 21){
        message = "You got a blackjack!";
        hasBlackJack = true;
        
    }else {
        message = "You got a bust!";
        isAlive = false;
        
    }
    messageEl.textContent = message;
    sumEl.textContent = `Sum: ${sum}`;
    cardsEl.textContent = "Cards: " + cards[0] +" "+ cards[1];
}

function newCard(){
    console.log("Drawing new card from the deck!");
    let newCard = Math.floor(Math.random() * 10 + 2);
    cards.push(newCard);
    sum = sum + newCard;
    renderGame();
}


//cash out money
console.log(hasBlackJack);
console.log(isAlive);

//for loops
/*     start         finish      step size
for ( let count =1; count < 11; count += 1) {
    console.log(count);
}

for (let i = 0; i < 6; i+=1){
    console.log(i);
}
*/


