var student = {
  firstName: 'Nhu',
  lastName: 'Pham',
  age: 24
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'front-end developer';

console.log('value of student.LivesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation', student.previousOccupation);
console.log('value of student', student);

var vehicle = {
  make: 'SoroSuub',
  model: 'Landspeeder',
  year: '20BBY'
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = true;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);

console.log('value of vehicle:', vehicle);

var pet = {
  name: 'mackie',
  type: 'doggo'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
