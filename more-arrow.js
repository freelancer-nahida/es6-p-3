// // const difference = (x, y) => x - y;

// // const result = difference(100, 4);

// // console.log(result);

// function getThird(numbers) {
//   return numbers[2];
// }

// // const getThird = numbers => numbers[2];

// const third = getThird([3, 5, 50, 9]);
// console.log(third);

// const doubleIt = (num) => num * 2;
// console.log(doubleIt(6));

// //large  math

// const doMath = (x = 0, y = 0, z = 0) => {
//   const sum = x + y + z;
//   const mult = x * y * z;
//   const result = sum + mult;

//   return result;
// };
// console.log(doMath(66, 2));

// const max = Math.max(22, 55, 88, 99);
// console.log(max);

// const numbers = [3, 6, 8, 7, 66, 88, 99];

// const arrayMax = Math.max(...numbers);
// console.log(arrayMax, ...numbers);

// const friends = [22, 33, 44, 55, 66, 77, 88];

// const bondu = [...friends];
// bondu.push(12);
// console.log(friends);

// const actor = {
//   name: "aj",
//   age: 30,
//   phone: "o1712692645",
//   money: 99999999999,
// };

//object destructure
// const phone = actor.phone;
// const { phone, age: boyos, money: bdt } = actor;
// console.log(phone);
// console.log(boyos);

// console.log(bdt);

// arrary destructure

const numbers = [45, 66];
const [first, sec] = numbers;

// const [x, y] = [54, 87];
// console.log(x, y);

// function doubleIt(a, b) {
//   return [a * 2, b * 2];
// }
// const [prothom, ditio] = doubleIt(56, 98);
// console.log(prothom, ditio);

const glass = {
  name: "glass",
  color: "golden",
  price: 500,
  isCleaned: true,
};
console.log(glass);

// const keys = Object.keys(glass);
// console.log(keys);

// const values = Object.values(glass);
// console.log(values);
// const pair = Object.entries(glass);
// console.log(pair);

// delete glass.isCleaned;
// console.log(glass);

// const { isCleaned } = glass;
// console.log(isCleaned);

Object.seal(glass);
console.log(glass);

// Object.freeze(glass);
// glass.source = "bd";
// console.log(glass);

// const { isCleaned, ...shortGlass } = glass;
// console.log(shortGlass);
