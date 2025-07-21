function add(a, b) {
  return a + b;
}

// fumction expression

const add2 = function (a, b) {
  return a + b;
};
console.log(add2(23, 56));

// arrow function

const add3 = (a, b) => a + b;
console.log(add3(36, 58));

const add4 = (a, b, c, d) => a + b + c + d;
console.log(add4(40, 50, 60, 90));

const add5 = (num1, num2, num3, num4, num5) => num1 + num2 + num3 + num4 + num5;

console.log(add5(20, 20, 10, 20, 50));
