// script.js

function displayChoice(choice) {
  const firstParagraph = document.getElementById("display");
  firstParagraph.innerHTML = choice;
}

function playGame() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const playerChoice = document.getElementById("display").textContent;
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  
  const resultParagraph = document.querySelector(".result");
  resultParagraph.innerHTML = playerChoice + " vs " + randomChoice;

  const declarationParagraph = document.querySelector(".declaration");
  declarationParagraph.classList.remove('win', 'lose', 'tie'); 

  if (playerChoice === randomChoice) {
    declarationParagraph.innerHTML = "It's a tie! Try again.";
    declarationParagraph.classList.add('tie');
  } else if ((playerChoice === 'Rock' && randomChoice === 'Scissors') ||
             (playerChoice === 'Paper' && randomChoice === 'Rock') ||
             (playerChoice === 'Scissors' && randomChoice === 'Paper')) {
    declarationParagraph.innerHTML = "You win!";
    declarationParagraph.classList.add('win');
    
    // Trigger confetti blast when the player wins
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 0.5, y: 0.5 }
    });
  } else {
    declarationParagraph.innerHTML = "You lose! Try again.";
    declarationParagraph.classList.add('lose');
  }
  
  declarationParagraph.scrollIntoView({ behavior: 'smooth', block: 'end' });
}
