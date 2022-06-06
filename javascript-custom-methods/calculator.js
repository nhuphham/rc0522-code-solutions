const calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => x / y,
  square: x => x * x,
  sumAll: numbers => numbers.reduce((x, y) => x + y, 0),
  getAverage: numbers => numbers.length <= 0 ? 0 : calculator.sumAll(numbers) / numbers.length
};
// function add(x, y) {
//   return x + y;
// }
// function subtract(x, y) {
//   return x - y;
// }
// function multiply(x, y) {
//   return x * y;
// }
// function divide(x, y) {
//   return y <= 0 ? undefined : x / y;
// }
// function square(x) {
//   return x * x;
// }
// function sumAll(numbers) {
//   return numbers.reduce((x, y) => x + y, 0);
// }
// function getAverage(numbers) {
//   return numbers.length <= 0 ? 0 : sumAll(numbers) / numbers.length;
// }
