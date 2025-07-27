// const first = 2;
// const sec = 2;
// if (first == sec) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// const first = { x: 5 };
// const sec = { x: 5 };
// if (first == sec) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// const first = [];
// const sec = [];
// if (first == sec) {
//   console.log("true");
// } else {
//   console.log("false");
// }

const first = [];
const sec = first;
if (first === sec) {
  console.log("true");
} else {
  console.log("false");
}

// type coercion
// console.log("5" + 6);
// Alwas use ===
// non-premitive doesn,t work on equal
