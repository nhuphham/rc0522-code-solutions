var num = (1, 2, 3, 4, 5);
var maxium = Math.max(num);
console.log(maxium);

var heros = ['batman', 'superman', 'ironman', 'spiderman'];
var randomNumber = Math.random(heros);
randomNumber = heros.length * randomNumber;
var randomIndex = Math.floor(randomNumber);

console.log(randomIndex);

var randomHero = heros[randomIndex];
console.log(randomHero);

var library = [
  {
    title: 'The Power of Habit',
    author: 'Charles Duhigg'
  },
  {
    title: 'Pillow thoughts',
    author: 'Pepper Nilla'
  },
  {
    title: 'Milk and Honey',
    author: 'Rupi Kour'
  }
];

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

var lastBook = library.pop();
console.log(lastBook);
var firstBook = library.shift();
console.log(firstBook);

library.push(js);
library.unshift(css);
library.splice(-1);
console.log(library);

var fullName = 'Nhu Pham';
var split = fullName.split(' ');

var firstAndLastName = split;
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
