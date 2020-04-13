/////////////////////////////////////////////////
// Creating Arrays
/////////////////////////////////////////////////

// // 일반적인 방법
// const numbers = [1, 2, 3];
// console.log(numbers);

// // 생성자 함수를 사용하는 방법
// const moreNumbers = new Array(5, 2); // []
// console.log(moreNumbers);

// // 또다른 방법
// const yetMoreNumbers = Array.of(1, 2, 3, 'Hi');
// console.log(yetMoreNumbers);

// // 인수를 배열로 전환
// const listItems = document.querySelectorAll('li');
// console.log(listItems);
// const arrayItemLists = Array.from(listItems);
// console.log(arrayItemLists);

/////////////////////////////////////////////////
// Which Data Can You Store In Arrays?
/////////////////////////////////////////////////

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', {moreDetail: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//     for (const dataPoints of data) {
//         console.log(dataPoints);
//     }
// }

// console.log(personalData[1]);

/////////////////////////////////////////////////
// Adding & Removing ELements
/////////////////////////////////////////////////

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');
// const popedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Coding';
// // hobbies[5] = 'Reading'; // rarely used
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// const removedElements = hobbies.splice(-2, 1);
// console.log(hobbies);

/////////////////////////////////////////////////
// Selecting Range & Creating Copies 
/////////////////////////////////////////////////

// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// // const storedResults = testResults.slice(2);
// const storedResults = testResults.concat([3.99, 2]);

// testResults.push(5.91);

// console.log(storedResults, testResults);
// console.log(testResults.lastIndexOf(1.5));

// console.log(testResults.includes(10.99));
// console.log(testResults.indexOf(10.99) !== -1);

// const personData = [{ name: 'Max' }, { name: 'Lee' }];
// console.log(personData.indexOf({ name: 'Max' }));

// const lee = personData.find((person, idx, persons) => {
//     return person.name === 'Lee';
// });

// lee.name = 'Anna';

// console.log(lee, personData);

// const maxIndex = personData.findIndex((person, idx, persons) => {
//     return person.name === 'MAX';
// });

// console.log(maxIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //     taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
//     const priceObj = {index: idx, taxAdjustedPrice: price * (1 + tax )};
//     taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//     const priceObj = {index: idx, taxAdjustedPrice: price * (1 + tax )};
//     return priceObj;
// });

// // console.log(prices, taxAdjustedPrices);

// const sortedPrices = prices.sort((a, b) => {
//     if (a > b) {
//         return 1;
//     } else if (a === b) {
//         return 0;
//     } else {
//         return -1;
//     }
// });
// // console.log(sortedPrices.reverse());
// console.log(sortedPrices);

// const filteredArray = prices.filter(price => price > 6);

// console.log(filteredArray);

// // let sum = 0;
// // prices.forEach((price) => {
// //     sum += price;
// // });

// // console.log(sum);

// const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

// console.log(sum);