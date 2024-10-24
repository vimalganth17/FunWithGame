//number guess game
let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = [];
let maxAttempts = 10;

const guessField = document.querySelector('.guessfield');
const submitGuess = document.querySelector('.submit-guess');
const resultArea = document.querySelector('.res');
const startAgainButton = document.querySelector('.startagain');

submitGuess.addEventListener('click', numberGuessingGame);
startAgainButton.addEventListener('click', resetNumberGame);

function numberGuessingGame() {
    const guess = Number(guessField.value);
    guessField.value = '';
    guesses.push(guess);
    
    let feedback = '';
    if (guess === randomNumber) {
        feedback = 'Congratulations! You guessed the number!';
        endNumberGame();
    } else if (guess < randomNumber) {
        feedback = 'Too low!';
    } else {
        feedback = 'Too high!';
    }
    resultArea.innerHTML = `Previous guesses: ${guesses.join(', ')} <br>${feedback}`;
    
    if (guesses.length === maxAttempts) {
        resultArea.innerHTML += `<br>Game over! The number was ${randomNumber}.`;
        endNumberGame();
    }
}

function endNumberGame() {
    guessField.disabled = true;
    submitGuess.disabled = true;
}

function resetNumberGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guesses = [];
    guessField.disabled = false;
    submitGuess.disabled = false;
    resultArea.innerHTML = 'Previous guesses: ';
}

// Rock-Paper-Scissors Game


const choices = ["rock", "paper", "scissors"];
const imgElements = document.querySelectorAll('.siz img');
imgElements.forEach(img => img.addEventListener('click', playRPS));

function playRPS(event) {
    const userChoice = event.target.alt.toLowerCase();
    const computerChoice = choices[Math.floor(Math.random() * 3)]; 
    let winner = '';
    let loser = '';

    if (userChoice === computerChoice) {
        result = `Congratulations! You both chose ${userChoice}, so you win!`;
        
    } else {
        result = `You lose! ${computerChoice} beats ${userChoice}.`;
        
    }

    document.querySelector('.fire h2:nth-of-type(2)').innerText = `Your choice: ${userChoice}`;
    document.querySelector('.fire h2:nth-of-type(3)').innerText = `Computer's choice: ${computerChoice}`;
    document.querySelector('.fire h2:nth-of-type(4)').innerText = `Result: ${result}`;
}



