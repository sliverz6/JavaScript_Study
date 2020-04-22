const ATTACK_VALUE = 10;

let chosenMaxLife = 100;
let currentmonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentmonsterHealth -= damage;
}

attackBtn.addEventListener('click', attackHandler);