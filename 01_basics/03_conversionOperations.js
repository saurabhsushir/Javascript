let score = undefined;

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// it will get convert to number but value will be NaN 'Not a Number' 

// "33" => 33
// "33abc" => NaN

let isloggedIn = "saurabh"

let booleanIsLoggedIn = Boolean(isloggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "saurabh" => true

let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);