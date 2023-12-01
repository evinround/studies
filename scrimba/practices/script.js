let person {
    name: 'John',
    age: 30,
    country: 'USA'
}

logData(){
    return `My name is ${person.name} and I am ${person.age} years old in ${person.country}.`
}

logData();

let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

function logCountries(){
    console.log("The 5 largest countries are: ");
    for( let i = 0; i < largeCountries.length; i++){
        console.log(largeCountries[i]);
    }
}

let largeCountries2 = ["Tuvalu","India","USA","Indonesia","Monaco"]
largeCountries2.pop();
largeCountries2.shift();
largeCountries2.push("Pakistan");
largeCountries2.unshift("China");

console.log(largeCountries2);


let hands = ["rock", "paper", "scissor"]

function randomHands(){
    let randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 1){
        return hands[0];
    }else if(randomNumber === 2){
        return hands[1];
    }else{
        return hands[2];
    }
}
//actual answer 
//return hands[randomNumber];

let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let randomFighter = Math.floor(Math.random() * fighters.length);
    let randomFighter2 = Math.floor(Math.random() * fighters.length);
    stageEl.innerHTML = randomFighter + " vs " + randomFighter2;