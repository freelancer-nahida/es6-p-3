// function greeting(person) {
//   console.log(person);
// }
// greeting("halim");
// // const name = 'halim';
// // const numbers = [2,2,5,8,7]
// const laptop = { pric: 4500, brand: "waltan", ran: 8 };
// greeting(laptop);

// function greeting(greetingHanler, name) {
//   greeingHandler(name);
// }

// function greeingHandler(name) {
//   console.log("good morning", name);
// }
// greeting(greeingHandler, "Shuma");

// function greeting(gt, name) {
//   // console.log(person);
//   gt(name);
// }
// const name = "halim";
// const numbers = [1, 2, 3, 5, 6];

// const laptop = { price: 45000, brand: "walton", ram: 8 };
// greeting(laptop);

// function gt(name) {
//   console.log("good morning", name);
// }
// greeting(gt, "suma");
////////////////////////////////////

function greeting(greetingHandler, name) {
  greetingHandler(name);
}

function greetingEvening(name) {
  console.log("good evening", name);
}
greeting(greetingEvening, "nahida");

/////////////////////////////////////
function as(df, name) {
  df(name);
}

function zx(name) {
  console.log("fgdfjg", name);
}
as(zx, "nahidas");

/////////////////////////////////

function display(some) {
  console.log(some);
}

function calculator(num1, num2, callback) {
  let sum = num1 + num2;
  callback(sum);
}
//  let result =
calculator(6, 8, display);
// display(result);
/////////////////////
function greeting(beli, name) {
  beli(name);
}

function greetEvening(name) {
  console.log("good evening", name);
}
greeting(greetEvening, "nurani");
//////////////////////////

function submitHandler() {
  console.log("submit btn clicked");
}

document.getElementById("btn-submit").addEventListener("click", submitHandler);
