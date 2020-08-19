const base = 9;

const numberToConvert = 324;

const digits = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/";

let brokenDownNumber = Array.from(numberToConvert.toString()).map(Number).reverse();

let raisedByOne = [];
let raisedToPower = [];

const sumFunction = (accumulator, currentValue) => accumulator + currentValue;

for (let i = 0; i < brokenDownNumber.length; i++) {
   raisedByOne.push(Math.pow(base, i));
   raisedToPower.push(brokenDownNumber[i] * raisedByOne[i]);
   console.log(raisedByOne);
}

let finalResult = raisedToPower.reduce(sumFunction);

console.log(raisedToPower, brokenDownNumber, finalResult)


