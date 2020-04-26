const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, previousCalc, inputNumber) {
    const calcDescription = `${previousCalc} ${operator} ${inputNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(operation, prevResult, userNumber, result) {
    const logEntry = {
        operation: operation,
        prevResult: prevResult,
        userNumber: userNumber,
        result: result,
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculation(operation) {
    const enteredNumber = getUserNumberInput();

    if (
        operation !== 'ADD' && 
        operation !== 'SUBTRACT' &&
        operation !== 'MULTIPLY' &&
        operation !== 'DIVIDE' ||
        !enteredNumber
    ) {
        return;
    }

    const initialResult = currentResult;
    let operator;

    if (operation === 'ADD') {
        currentResult += enteredNumber;
        operator = '+';
    } else if (operation === 'SUBTRACT') {
        currentResult -= enteredNumber;
        operator = '-';
    } else if (operation === 'MULTIPLY') {
        currentResult *= enteredNumber;
        operator = '*';
    } else if (operation === 'DIVIDE') {
        currentResult /= enteredNumber;
        operator = '/';
    }

    createAndWriteOutput(operator, initialResult, enteredNumber);
    writeToLog(operation, initialResult, enteredNumber, currentResult);
}

function add() {
    calculation('ADD');
}

function subtract() {
    calculation('SUBTRACT');
}

function multiply() {
    calculation('MULTIPLY');
}

function divide() {
    calculation('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);