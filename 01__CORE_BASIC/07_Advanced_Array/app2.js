/************************************************/
// Creating Arrays
/************************************************/

const numbers = [1, 2, 3];
console.log(numbers);

// // const moreNumbers = new Array('Hi!', 'Welcome!'); 
// const moreNumbers = Array(5); // new 생략 가능
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);
// const moreNumbers = Array.from('Hi!');
const arrayListItems = Array.from(listItems);
console.log(arrayListItems);