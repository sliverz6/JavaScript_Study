const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const SCISSORS = 'SCISSORS';
const PAPER = 'PAPER';
const DEFAULT_CHOICE = ROCK;

const getPlayerChoice = () => {
    let playerChoice = prompt(`${ROCK}, ${SCISSORS} or ${PAPER}`, '').toUpperCase();
    if (
        playerChoice !== ROCK ||
        playerChoice !== SCISSORS ||
        playerChoice !== PAPER 
    ) {
        alert(`You pick wrong choice! We picked ${DEFAULT_CHOICE} for you!`);
        return DEFAULT_CHOICE;
    } 
    return playerChoice;
};

const getComputerChoice = () => {

};

startGameBtn.addEventListener('click', () => {
    console.log('Game is running...');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
});