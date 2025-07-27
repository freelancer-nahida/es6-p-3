function sum(a, b, c) {
  // arguments.push(55);

  const arg = [...arguments];
  arg.push(66);
  //   console.log(arg);

  const result = a + b + c;
  return result;
}
const total = sum(45, 23, 56, 58, 99, 88);
// console.log(total);
/////////////////////////

let num1 = 5;
let num2 = 7;

function multiple(a, b) {
  a = 25;
  const result = a * b;

  return result;
}

const output = multiple(num1, num2);
console.log(output);

let student1 = { name: "ananta", partner: "barsha" };
let student2 = { name: "siam", partner: "anika" };

function makeMovie(couple1, couple2) {
  couple1.name = "ononto";
  couple2.partner = "min";
}

console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);

//pass by value function are asol data copy pass kora hoy