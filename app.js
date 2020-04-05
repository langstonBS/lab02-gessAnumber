//get user input from main.HTML

import { compareNumbers } from './src/compareNumbers.js';

const userInput = document.getElementById('user-input');
const presSubmit = document.getElementById('submit-butten');
let numberOfGess = document.getElementById('gess');
let gess = document.getElementById('output');
const resetBuntion = document.getElementById('resetPress');

//creates computers math number
const numberAnser = Math.floor(Math.random() * 20);



let myCount = 0;
let gessLeft = 4;


function startVarables(){
    myCount = 0;
    gessLeft = 4;
    resetBuntion.style.display = 'none';
    gess.textContent = '';
    numberOfGess.textContent = gessLeft;
}


//disabes button that is working
function disabeButton() {
    if (presSubmit.disabled)
    {
        presSubmit.disabled = false;
    } else {
        presSubmit.disabled = true;
    }
}

//tells you that you apm
function winGame() {
    disabeButton();
    resetBuntion.style.display = 'inline';
    gess.textContent = 'you are amazing';
}

//if loss infoms the winner
function loseGame(){
    disabeButton();
    resetBuntion.style.display = 'inline';
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
    gessLeft = gessLeft - 1;
    numberOfGess.textContent = gessLeft;   
}

//the event lisener 
presSubmit.addEventListener('click', rightWrong);
resetBuntion.addEventListener('click', resetFuntion);

function resetFuntion()
{
    startVarables();
    disabeButton();  
}