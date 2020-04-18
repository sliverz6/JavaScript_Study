// const array = [3, 1.5, 13, 7, -2, 6];

// // 1번
// array.filter((number) => {
//     number >= 5
// });

// // 2번 
// array.map((number) => {
//     const numObj = {number: number};
//     console.log(numObj);
// });

// console.log(array);

// // 3번
// array.reduce((prevVal, CurrVal) => {
//     prevVal *= CurrVal;
// }, 0);

// console.log(array);

////////////////////////////////////////////////////

const numbers = [1, 2, 3, 4, 5, 6];

const numsGreater5 = numbers.filter(val => val > 5);

console.log(numsGreater5);


const mappedNumber = numbers.map(val => ({num: val}));

console.log(mappedNumber);

const multiplication = numbers.reduce((curResult, curValue) => curResult * curValue, 1);

console.log(multiplication);

function findMax(...nums) {
    let curMax = nums[0];
    for (const num of nums) {
        if (num > curMax) {
            curMax = num
        }
    }
    return curMax;
}

console.log(...numbers);
console.log(findMax(...numbers));