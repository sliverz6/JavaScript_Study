const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function writeToLog(operator) {
    const logEntry = {
        operationType: operator,
    }
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
};

function calculationValue(operationType) {
    const EnteredNumber = getUserNumberInput();

    if (
        operationType !== 'ADD' &&
        operationType !== 'SUBTRACT' &&
        operationType !== 'MULTIPLY' &&
        operationType !== 'DIVIDE' ||
        !EnteredNumber
    ) {
        return;
    }

    const initialResult = currentResult;
    let operator;
    if (operationType === 'ADD') {
        operator = '+';
        currentResult += EnteredNumber;
    } else if (operationType === 'SUBTRACT') {
        operator = '-';
        currentResult -= EnteredNumber;
    } else if (operationType === 'MULTIPLY') {
        operator = '*';
        currentResult *= EnteredNumber;
    } else if (operationType === 'DIVIDE') {
        operator = '/';
        currentResult /= EnteredNumber;
    }
    createAndWriteOutput(operator, initialResult ,EnteredNumber);
    writeToLog(operationType);
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