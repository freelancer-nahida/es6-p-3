/*
Truthy 
1.truee
2.any position and negative number will be truthy
3.any string
4.'0','false'
5.{}
6[]
False
1.false
2.Except 0
3.Emptyy string
4.undefine
5.null
*/

const x = 0;
if (x) {
  console.log("value os x is truthy");
} else {
  console.log("value of x is falsy");
}
