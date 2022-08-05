function interestFunction(p, n, r) {
  // return (p * n * r) / 100;
  let var1 = (p * n * r) / 100;
  return (var1 + p);
}

let p = 100;
let n = 5;
let r = 10;
let result = interestFunction(p, n, r);
console.log(result);
