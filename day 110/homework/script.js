
let a = "hello";
let b = a;
b = "world";

console.log(a); // ?
console.log(b); // ?

let x = { name: "Janeza" };
let y = x;
y.name = "Master";

console.log(x.name); // ?
console.log(y.name); // ?
// output js hello world



const person = {
  name: "Jane",
  age: 25,
  job: "Developer"
};

for (let key in person) {
  console.log(key);
}

const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}
