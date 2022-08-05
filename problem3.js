function complexInterest(p, r, n) {
    return (p * (1 + r / 100) ** n - p).toFixed(2);
}

let p = 100;
let r = 5;
let n = 5;

console.log(complexInterest(p, r, n));