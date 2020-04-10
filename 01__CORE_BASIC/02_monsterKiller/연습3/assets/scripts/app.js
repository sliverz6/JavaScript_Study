const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;
const DEFAULT_MAX_LIFE = 100;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';

let playerChoiceLife = prompt('Choose the max life.', '');

if (isNaN(playerChoiceLife) || playerChoiceLife <= 0) {
    alert('You entered wrong number!');
    playerChoiceLife = DEFAULT_MAX_LIFE;
} 

let chooseMaxValue = playerChoiceLife;

let currentMonsterHealth = chooseMaxValue;
let currentPlayerHealth = chooseMaxValue;
let hasBonusLife = true;

adjustHealthBars(chooseMaxValue);

function reset() {
    currentMonsterHealth = chooseMaxValue;
    currentPlayerHealth = chooseMaxValue;
    adjustHealthBars(chooseMaxValue);
}

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const monsterDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= monsterDamage;

    if (hasBonusLife && currentPlayerHealth <= 0) {
        alert('The Bonus life saved you!');
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(currentPlayerHealth);
        removeBonusLife();
        hasBonusLife = false;
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You Win!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lose!');
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('You have a draw!');
    }

    if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0) {
        reset();
    }
}

function dealDamage(mode) {
    let modeDamage;
    if (mode === MODE_ATTACK) {
        modeDamage = ATTACK_VALUE;
    } else if (mode === MODE_STRONG_ATTACK) {
        modeDamage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(modeDamage);
    currentMonsterHealth -= damage;
    endRound();
}

function attackHandler() {
    dealDamage(MODE_ATTACK);
}

function strongAttackHandler() {
    dealDamage(MODE_STRONG_ATTACK);
}

function healHandler() {
    let healValue;
    if (currentPlayerHealth >= chooseMaxValue - HEAL_VALUE) {
        alert("You can't heal over max life!");
        healValue = chooseMaxValue - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healHandler);