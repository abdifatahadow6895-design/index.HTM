const canWalk = {
  walk() {
    console.log(this.name + " is walking");
  },
};

const canEat = {
  eat() {
    console.log(this.name + " is eating");
  },
};

const person = {
  name: "Ali",
};

// mix behaviors into person
Object.assign(person, canWalk, canEat);

person.walk(); // Ali is walking
person.eat(); // Ali is eating
