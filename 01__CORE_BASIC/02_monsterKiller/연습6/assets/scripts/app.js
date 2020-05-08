const ATTACK_DAMAGE = 10;
const STRONG_ATTACK_DAMAGE = 17;
const MONSTER_ATTACK_DAMAGE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';

const enteredMaxLife = prompt('최대 체력을 입력하세요', '100');

let chosenMaxLife = parseInt(enteredMaxLife);

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100;
} 

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    adjustHealthBars(chosenMaxLife);
}

function endRound() {
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_DAMAGE);
    const initialPlayerHealth = currentPlayerHealth;
    currentPlayerHealth -= playerDamage;

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        alert('보너스 생명이 당신을 살렸습니다!');
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(currentPlayerHealth);
        hasBonusLife = false;
        removeBonusLife();
    }

    if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You Lost!');
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You Won!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a Draw!');
    }

    if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0) {
        reset();
    }
}

function dealDamage(mode) {
    let dealDamage;
    if (mode === MODE_ATTACK) {
        dealDamage = ATTACK_DAMAGE;
    } else if (mode === MODE_STRONG_ATTACK) {
        dealDamage = STRONG_ATTACK_DAMAGE;
    }
    const damage = dealMonsterDamage(dealDamage);
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
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert('최대 체력 이상으로 회복할 수 없습니다!');
        healValue = chosenMaxLife - currentPlayerHealth;
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