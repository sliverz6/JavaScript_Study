function sayHello(name) {
  console.log('Hi ' + name);
}

sayHello();

// 과제 1

const sayHello2 = name => {console.log('Hi ' + name)};

// 과제 2

const sayHello3 = (greet, name) => {console.log(greet + ' ' + name)};
const sayHello4 = () => {console.log('Hi Max.')};
const sayHello5 = name => 'Hi ' + name;

// 과제 3

const sayHello6 = (name = 'Max') => {console.log('Hi ' + name)};


const checkInput = (callback, ...strings) => {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }

  if (!hasEmptyText) {
    callback();
  } 
};

checkInput(
  () => {
    console.log('All not empty');
  }, 
  'Lee', 
  'Seung', 
  'Jae'
);