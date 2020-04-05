//get user input from main.HTML

import { compareNumbers } from './src/compareNumbers.js';

const userInput = document.getElementById('user-input');
const presSubmit = document.getElementById('submit-butten');
let numberOfGess = document.getElementById('gess');
let gess = document.getElementById('output');
const resetBuntion = document.getElementById('resetPress');

//creates computers math number
let numberAnser = Math.floor(Math.random() * 20);



let gessLeft = 4;


function startVarables(){ 
    gessLeft = 4;
    resetBuntion.style.display = 'none';
    gess.textContent = '';
    numberOfGess.textContent = gessLeft;
    numberAnser = Math.floor(Math.random() * 20);
    console.log(numberAnser);
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
    console.log(numberAnser);
    const gessess = Number(userInput.value);
    let yesNo = compareNumbers(gessess, numberAnser);
    
    if (yesNo === 0){
        return winGame();
    } else if (yesNo === -1){
        toLow(); 
        gessLeft = gessLeft - 1;  
    } else if (yesNo === 1){
        toHigh(); 
        gessLeft = gessLeft - 1;
    }  
    
   
    if (gessLeft === 0) {
        return loseGame();
    }
    

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