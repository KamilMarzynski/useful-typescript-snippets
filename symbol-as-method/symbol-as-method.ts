import "index";
const print = Symbol("print");

const user = {
  name: "Kamil",
  age: 101,
  [print]: function () {
    console.log(`${this.name} is ${this.age} years old`);
  },
};

JSON.stringify(user); // {name: 'Kamil', age: 101}
user[print](); // Kamil is 101 years old
