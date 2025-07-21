function kitchen() {
  let roast = 0;
  return function () {
    roast = roast + 2;
    return roast;
  };
}
const maintable = kitchen();
console.log(maintable());
console.log(maintable());
console.log(maintable());
