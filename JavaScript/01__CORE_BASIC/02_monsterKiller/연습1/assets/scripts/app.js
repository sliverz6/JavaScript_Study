const PLAYER_ATTACK = 10;
const PLAYER_STRONG_ATTACK = 17;
const MONSTER_ATTACK = 14;
const HEAL_VALUE = 20;

const MODE_PLAYER_ATTACK = 'ATTACK';
const MODE_PLAYER_STRONG_ATTACK = 'STRONG_ATTACK';

const setValue = prompt('에너지를 입력하세요', '100');
let chosenMaxLife = parseInt(setValue);

if (isNaN(chosenMaxLife)) {
    chosenMaxLife = 100;
}

let currentPlayerHealth = chosenMaxLife;
let currentMonsterHealth = chosenMaxLife;
let hasBonusLife = true;
let logEntries = [];

adjustHealthBars(chosenMaxLife);

function reset() {
    currentPlayerHealth = chosenMaxLife;
    currentMonsterHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK);
    currentPlayerHealth -= playerDamage;

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        alert('보너스 생명!');
        setPlayerHealth(initialPlayerHealth);
        currentPlayerHealth = initialPlayerHealth;
        removeBonusLife();
        hasBonusLife = false;
    } 

    if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost!');
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You Won!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('Draw!');
    } 

    if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0) {
        reset();
    }
}

function chooseAttack(mode) {
    let attackMode; 
    if (mode === MODE_PLAYER_ATTACK) {
        attackMode = PLAYER_ATTACK;
    } else if (mode === MODE_PLAYER_STRONG_ATTACK) {
        attackMode = PLAYER_STRONG_ATTACK;
    }

    const damage = dealMonsterDamage(attackMode);
    currentMonsterHealth -= damage;
    endRound();
}

function attackHandler() {
    chooseAttack(MODE_PLAYER_ATTACK);
}

function strongAttackHandler() {
    chooseAttack(MODE_PLAYER_STRONG_ATTACK);
}

function healHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert('더 이상 회복할 수 없습니다.');
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }
    currentPlayerHealth += healValue;
    increasePlayerHealth(healValue);
    endRound();
}

function logHandler() {
    console.log(logEntries);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healHandler);
logBtn.addEventListener('click', logHandler);