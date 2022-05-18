function convertMinutesToSeconds(minutes) {
  var results = minutes * 60;
  return results;
}
var seconds = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResults:', seconds);

function greet(name) {
  var result = 'Hey' + ', ' + name;
  return result;
}
var greeting = greet('Nhu');
console.log(greeting);

function getArea(width, height) {
  var area = width * height;
  return area;
}
var resultArea = getArea(17, 42);
console.log('getArea is:', resultArea);

function getFirstName(person) {
  var result = person.firstName;
  return result;
}
var first = getFirstName({ firstName: 'Nhu', lastName: 'Pham' });
console.log('getFirstName is:', first);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}
var last = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElement is: ', last);
