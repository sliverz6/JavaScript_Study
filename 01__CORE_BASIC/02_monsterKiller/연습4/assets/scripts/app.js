const ATTACK_DAMAGE = 10;
const STRONG_ATTACK_DAMAGE = 17;
const MONSTER_ATTACK_DAMAGE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';

const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

let inputMaxLife = prompt('Choose Max life', '100');

if (isNaN(inputMaxLife) || inputMaxLife <= 0) {
    inputMaxLife = 100;
}
 
let chosenMaxLife = parseInt(inputMaxLife);

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let battleLog = [];

adjustHealthBars(chosenMaxLife);

function writeToLog(event, value, monsterHealth, playerHealth) {
    const logEntry = {
        event: event,
        value: value,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
    };
    if (event === LOG_EVENT_PLAYER_ATTACK) {
        logEntry.target = 'MONSTER';
    } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
        logEntry.target = 'MONSTER';
    } else if  (event === LOG_EVENT_MONSTER_ATTACK) {
        logEntry.target = 'PLAYER';
    } else if (event === LOG_EVENT_PLAYER_HEAL) {
        logEntry.target = 'PLAYER';
    } 
    battleLog.push(logEntry);
}

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    adjustHealthBars(chosenMaxLife);
}

function endRound() {
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_DAMAGE);
    const initialPlayerHealth = currentPlayerHealth;
    currentPlayerHealth -= playerDamage;
    writeToLog(
        LOG_EVENT_MONSTER_ATTACK, 
        playerDamage, 
        currentMonsterHealth, 
        currentPlayerHealth
    );

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        alert('The bonus Life saved you!');
        currentPlayerHealth = initialPlayerHealth; 
        setPlayerHealth(currentPlayerHealth);
        removeBonusLife();
    } 

    if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You Lose!');
        writeToLog(
            LOG_EVENT_GAME_OVER, 
            'PLAYER_LOSE', 
            currentMonsterHealth, 
            currentPlayerHealth
        );
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You Win!');
        writeToLog(
            LOG_EVENT_GAME_OVER, 
            'PLAYER_WON', 
            currentMonsterHealth, 
            currentPlayerHealth
        );
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('Draw!');
        writeToLog(
            LOG_EVENT_GAME_OVER, 
            'A DRAW', 
            currentMonsterHealth, 
            currentPlayerHealth
        );
    }

    if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0) {
        reset();
    }
}

function dealDamage(mode) {
    let dealDamage;
    let logEvent;
    if (mode === MODE_ATTACK) {
        dealDamage = ATTACK_DAMAGE;
        logEvent = LOG_EVENT_PLAYER_ATTACK;
    } else if (mode === MODE_STRONG_ATTACK) {
        dealDamage = STRONG_ATTACK_DAMAGE;
        logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    }
    const damage = dealMonsterDamage(dealDamage);
    currentMonsterHealth -= damage;
    writeToLog(
        logEvent, 
        damage, 
        currentMonsterHealth, 
        currentPlayerHealth
    );
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
    if (currentPlayerHealth > chosenMaxLife - HEAL_VALUE) {
        alert("You can't heal over max life!");
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    writeToLog(
        LOG_EVENT_PLAYER_HEAL, 
        healValue, 
        currentMonsterHealth, 
        currentPlayerHealth
    );
    endRound();
}

function printLogHanlder() {
    console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healHandler);
logBtn.addEventListener('click', printLogHanlder);