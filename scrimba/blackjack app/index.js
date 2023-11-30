let cards = [] 
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    } else {
        messageEl.textContent = "GAME OVER!";}
}


//for loops
/*     start         finish      step size
for ( let count =1; count < 11; count += 1) {
    console.log(count);
}

for (let i = 0; i < 6; i+=1){
    console.log(i);
}

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great to hear"
]

for (let i = 0; i < messages.length; i++){
    console.log(messages[i]);
}

loop challenge
let cards = [7, 3, 9];

for (let i = 0; i < cards.length; i++){
    console.log(cards[i]);
}

let sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
let greetingEl = document.getElementById("greeting-el")

Render the sentence in the greetingEl paragraph using a for loop and .textContent

for (i = 0; i < sentence.length; i++){
    greetingEl.textContent += sentence[i] + " ";
};

objects
let course = {
    title: "JavaScript",
    lessons: 10,
    creator: "John Doe",
    length: 63,
    level: 2,
    isFree: false,
    tags: ["html", "css", "javascript]
}

console.log(course.title);
*/

