class Animal {
  constructor(name) {
    this.name = name; // parent data
  }

  speak() {
    console.log(this.name + " makes a sound");
  }
}
class Dog extends Animal {
  constructor(name, breed) {
    super(name);        // get parent data
    this.breed = breed; // new data added
  }

  showBreed() {
    console.log("Breed: " + this.breed);
  }
}

let dog1 = new Dog("Tommy", "German Shepherd");

dog1.speak();       // inherited method
dog1.showBreed();   // child method