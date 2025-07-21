// const numbe = [2, 5, 6, 100];
// const total = numbe.reduce((p, c) => p + c, 0);

// console.log(total);

// const numbers = [190, 280, 70, 60, 50, 40];
// const sub = numbers.reduce((maria, beli) => maria - beli);
// console.log(sub);

const products = [
  { id: 1, name: "lenovo", price: 54000 },
  { id: 2, name: "dell", price: 51000 },
  { id: 3, name: "hp", price: 53000 },
  { id: 4, name: "mac", price: 55000 },
];
//map
// const names = products.map((product) => product.name);
// console.log(names);
// akbare ase
// const price = products.map((product) => product.price);
// console.log(price);

const expensive = products.filter((p) => p.price > 50000);
console.log(expensive);

//foreach  loop a loop a ase
// products.forEach((p) => console.log(p.id));

// find
const expen = products.find((p) => p.price > 50000);
console.log(expen);
