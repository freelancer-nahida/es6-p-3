function add(a, b) {
  const total = a + b;
  console.log(a, b);
  if (b > 5) {
    const summ = 25 + a + b;
    console.log(summ);
  }

  return total;
}
// console.log(total);

const sum = add(5, 9);
// add(5, 9);
console.log(sum);
