/*
8 ways to get undefine

1.Variable that is not intialized will give undefine
2.function with no return;
3.parameter that is not passed will be return undefine
4.If return has nothing on the right side will return undefine
5.property  that doesn,t exist on an object will give you undefine
6.accessing array element outside of the index range
7.deleting an element inside  array
8. set up value  direcly undefine 
*/

// let first;

// console.log(first);

// const total = noNegative(2, -5);
// console.log(total);

// const fifth = { id: 2, "2name": "nokib" };

// console.log(fifth.age);

// const num = [4, 5, 9, 8];
// delete num[2];
// console.log(num[2]);

const sixth = null;
console.log(undefined);

/*
8 Ways to Get 'undefined' in JavaScript

1. Variable that is not initialized will be 'undefined'
*/
let a;
console.log(a); // undefined

/*
2. Function with no return statement returns 'undefined'
*/
function noReturn() {}
console.log(noReturn()); // undefined

/*
3. Parameter that is not passed is 'undefined'
*/
function test(x) {
  console.log(x);
}
test(); // undefined

/*
4. If return has nothing after it (or just 'return' by itself), it returns 'undefined'
*/
function justReturn() {
  return;
}
console.log(justReturn()); // undefined

/*
5. Accessing a non-existent property of an object gives 'undefined'
*/
const obj = { name: "Nahida" };
console.log(obj.age); // undefined

/*
6. Accessing an array element outside of index range returns 'undefined'
*/
const arr = [1, 2, 3];
console.log(arr[5]); // undefined

/*
7. Deleting an element from an array makes that index 'undefined'
*/
delete arr[1];
console.log(arr[1]); // undefined

/*
8. Setting a value explicitly to 'undefined'
*/
let x = undefined;
console.log(x); // undefined
