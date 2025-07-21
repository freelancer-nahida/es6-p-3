const product = [
  { id: 1, name: "lenovo", price: 50000 },
  { id: 2, name: "dell", price: 400 },
  { id: 3, name: "hp", price: 55000 },
  { id: 4, name: "mac", price: 15000 },
];

// const total = product.reduce((p, c) => p + c.price, 0);
// console.log(total);
// const totalId = product.reduce((p, c) => p + c.id, 0);
// console.log(totalId);

//map
// const names = product.map((products) => products.name);
// console.log(names);

// forEach

// product.forEach((p) => console.log(p.id));

//filter
// const expensive = product.filter((p) => p.price > 5000);
// console.log(expensive);

//find
// const expen = product.find((p) => p.price > 45000);
// console.log(expen);

//reduce
const numbers = [2, 5, 9, 8, 6, 7];
// const total = numbers.reduce((p, c) => p - c, 0);
// console.log(total);

// class are nam suru hobe boro hater occor diya

class Product {
  country = "Bangladesh";
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak(talk) {
    console.log(`saradin pok pok  koro  r ${talk}`);
  }
}
const lenovo = new Product("nahida", 26);
console.log(lenovo);
lenovo.speak("kanna kori");
lenovo.speak("hasahaci kori"); 