//get user input from main.HTML
import './test';
const userInput = document.getElementById('user-input');
const presSubmit = document.getElementById('submit-butten');
let numberOfGess = document.getElementById('gess');
let gess = document.getElementById('output');

const numberAnser = Math.floor(Math.random() * 20);




let myCount = 0;


function compareNumbers(gess, conretAnser){
    if (gess < conretAnser) {
        return -1;
    } else if (gess === conretAnser) {
        return 0;
    } else if (gess > 1){
        return 1;
    }

}

function disabeButton() {
    presSubmit.disabled = true;
}



function winGame() {
    disabeButton();
    gess.textContent = 'you are amazing';
}

function loseGame(){
    disabeButton();
    gess.textContent = 'wow that sucks';
}

function toLow() {
    gess.textContent = 'you are too low';
    
}


function toHigh() {
    gess.textContent = 'you are to high';     
}

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

presSubmit.addEventListener('click', rightWrong);