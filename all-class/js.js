/*
 *var let const
 *default parameter
 *template string
 *arrow function
 *destrucring
 */
// function add(a = 0, b = o) {
//   return a + b;
// }
// console.log(add(1, 2));

// const a = 56;
// const b = 60;
// console.log(`sum of ${a} and ${b} is ${a + b}`);

// const square = (x) => x ** 2;
// console.log(square(2));

// const numbers = {
//   name: "numeric",
//   roll: 68,
// };
// const { name, roll } = numbers;
// console.log(numbers);

//Access Value

// const products = [{ price: 500 }];
// console.log(products[0].price);

// const user = {
//   id: 5001,
//   name: "sazidul Islam",
//   address: {
//     street: {
//       first: "nalchity",
//       seconr: "jhalokathi",
//       third: "Barisal",
//     },
//     city: "Dhaka",
//   },
// };
// console.log(user.address.street.first);

// const user2 = {
//   id: 5001,
//   name: "sazidul Islam",
//   address: {
//     first: "nalchity",
//     seconr: "jhalokathi",
//     third: "Barisal",
//   },
//   city: "Dhaka",
// };

// console.log(user2.address.street?.first);

const product = {
  count: 5000,
  data: [
    { id: 1, name: "vivo", price: 65000 },
    { id: 2, name: "Iphone", price: 165000 },
  ],
};

console.log(product.data[1].id);
