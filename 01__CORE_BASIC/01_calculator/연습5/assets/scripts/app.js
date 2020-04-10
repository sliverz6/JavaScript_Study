const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];


function getUserNumberInput() {
    return parseInt(userInput.value);
}

function writeAndOutputResult(operator, prevResult, calcNumber) {
    const calcDescription = `${prevResult} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeLog (
    operation, 
    prevResult, 
    calcNumber, 
    nowResult
) {
    const logEntry = {
        operation: operation,
        prevResult: prevResult,
        calcNumber: calcNumber,
        nowResult: nowResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    writeAndOutputResult('+', initialResult, enteredNumber);
    writeLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    writeAndOutputResult('-', initialResult, enteredNumber);
    writeLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    writeAndOutputResult('*', initialResult, enteredNumber);
    writeLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    writeAndOutputResult('/', initialResult, enteredNumber);
    writeLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);