const defaultResult = 0;
let currentResult = defaultResult;

let logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function writeAndOutputResult(operator, beforeValue, NewValue) {
    const calcDescription = `${beforeValue} ${operator} ${NewValue}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(operation, beforeNumber, userValue, resultValue) {
    const logEntry = {
        operation: operation,
        beforeCalc: beforeNumber,
        userNumber: userValue,
        result: resultValue
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculationValue(operationType) {
    const enteredNumber = getUserNumberInput();

    if (
        operationType !== 'ADD' &&
        operationType !== 'SUBTRACT' &&
        operationType !== 'MULTIPLY' &&
        operationType !== 'DIVIDE' || 
        !enteredNumber
    ) {
        return;
    }

    const initialResult = currentResult;
    let operator;

    if (operationType === 'ADD') {
        currentResult += enteredNumber;
        operator = '+';
    } else if (operationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        operator = '-';
    } else if (operationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        operator = '*'
    } else if (operationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        operator = '/';
    }

    writeAndOutputResult(operator, initialResult, enteredNumber);
    writeToLog(operationType, initialResult, enteredNumber, currentResult);
}

function add() {
    calculationValue('ADD');
}

function subtract() {
    calculationValue('SUBTRACT');
}

function multiply() {
    calculationValue('MULTIPLY');
}

function divide() {
    calculationValue('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);