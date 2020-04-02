//get user input from main.HTML

import { compareNumbers } from './src/compareNumbers.js';

const userInput = document.getElementById('user-input');
const presSubmit = document.getElementById('submit-butten');
let numberOfGess = document.getElementById('gess');
let gess = document.getElementById('output');

//creates computers math number
const numberAnser = Math.floor(Math.random() * 20);



//start the varabes
let myCount = 0;

//disabes button that is working
function disabeButton() {
    presSubmit.disabled = true;
}

//tells you that you apm
function winGame() {
    disabeButton();
    gess.textContent = 'you are amazing';
}

//if loss infoms the winner
function loseGame(){
    disabeButton();
    gess.textContent = 'wow that sucks';
}

// if too low
function toLow() {
    gess.textContent = 'you are too low';
    
}

//if to hight
function toHigh() {
    gess.textContent = 'you are to high';     
}

//right wrong
function rightWrong() {  
    const gessess = Number(userInput.value);
    let yesNo = compareNumbers(gessess, numberAnser);
    if (myCount === 3){
        loseGame();
    } else if (yesNo === -1){
        toLow();   
    } else if (yesNo === 1){
        toHigh(); 
    } else if (yesNo === 0){
        winGame();
    }
    myCount = myCount + 1;
    numberOfGess.textContent = myCount;   
}

//the event lisener 
presSubmit.addEventListener('click', rightWrong);