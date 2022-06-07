function ExampleConstructor() {

}
console.log(ExampleConstructor.prototype);
console.log(typeof ExampleConstructor);

const exConstructor = new ExampleConstructor();
console.log(exConstructor);

const instance = exConstructor instanceof ExampleConstructor;
console.log(instance);
