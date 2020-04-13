const defaultResult = 0;
let currentResult = defaultResult;

let logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function writeToLog(opeartion, initialResult, enteredValue, currentResult) {
    const logEntry = {
        operation: opeartion,
        initialResult: initialResult,
        enteredValue: enteredValue,
        currentResult: currentResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function writeAndOutputResult(operation, beforeResult, userInputNumber) {
    const calaDescription = `${beforeResult} ${operation} ${userInputNumber}`;
    outputResult(currentResult, calaDescription);
}

function calculationResult(operator) {
    const enteredValue = getUserNumberInput();
    if (
        operator !== '+' &&
        operator !== '-' &&
        operator !== '*' &&
        operator !== '/' ||
        !enteredValue
    ) {
        return
    }

    const initialResult = currentResult;
    let operation;
    if (operator === '+') {
        operation = 'ADD';
        currentResult += enteredValue;
    } else if (operator === '-') {
        operation = 'SUBTRACT';
        currentResult -= enteredValue;
    } else if (operator === '*') {
        operation = 'MULTIPLY';
        currentResult *= enteredValue;
    } else if (operator === '/') {
        operation = 'DIVIDE';
        currentResult /= enteredValue;
    }
    writeAndOutputResult(operator, initialResult, enteredValue);
    writeToLog(operation, initialResult, enteredValue, currentResult);
}

function add() {
    calculationResult('+');
}

function subtract() {
    calculationResult('-');
}

function multiply() {
    calculationResult('*');
}

function divide() {
    calculationResult('/');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);