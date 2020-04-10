const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function writeAndOuputResult(operation, prevResult, calcValue) {
    const calcDescription = `${prevResult} ${operation} ${calcValue}`;
    outputResult(currentResult, calcDescription);
}

function writeLog (
    operator, 
    initialResult, 
    enteredNumber, 
    currentResult
) {
    const logEntry = {
        operationType: operator,
        currentValue: initialResult,
        calculationValue: enteredNumber,
        resultValue: currentResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculationNumber (operatorType) {
    
    const enteredNumber = getUserNumberInput();
    if (
        operatorType !== 'ADD' &&
        operatorType !== 'SUBTRACT' &&
        operatorType !== 'MULTIPLY' &&
        operatorType !== 'DIVIDE' ||
        !enteredNumber
    ) {
        return;
    }

    let operator;
    const initialResult = currentResult;
    if (operatorType === 'ADD') {
        operator = '+';
        currentResult += enteredNumber;
    } else if (operatorType === 'SUBTRACT') {
        operator = '-';
        currentResult -= enteredNumber;
    } else if (operatorType === 'MULTIPLY') {
        operator = '*';
        currentResult *= enteredNumber;
    } else if (operatorType === 'DIVIDE') {
        operator = '/';
        currentResult /= enteredNumber;
    }
    
    writeAndOuputResult(operator, initialResult, enteredNumber);
    writeLog(operatorType, initialResult, enteredNumber, currentResult);
}

function add() {
    calculationNumber('ADD');
}

function subtract() {
    calculationNumber('SUBTRACT');
}

function multiply() {
    calculationNumber('MULTIPLY');
}

function divide() {
    calculationNumber('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);