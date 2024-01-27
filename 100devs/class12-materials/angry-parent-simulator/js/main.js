document.querySelector('#yell').addEventListener('click', run)

function run(){
  let fName = document.querySelector('#firstName').value
  let fMidName = document.querySelector('#FirstMiddle').value
  let lMidName = document.querySelector('#LastMiddle').value
  let lName = document.querySelector('#lastName').value

  const yellText = `${fName} + ${fMidName} + ${lMidName} + ${lName}`
  document.querySelector('#placeToYell').innerHTML = yellText
}

// const synth = window.speechSynthesis;
// document.querySelector('#yell').addEventListener('click', run)
//
// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value
//
//   const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`
//
//   document.querySelector('#placeToYell').innerText = yellText
//
//   let yellThis = new SpeechSynthesisUtterance(yellText);
//
//   synth.speak(yellThis);
// }
