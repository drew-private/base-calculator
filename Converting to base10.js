const base = 3;

const numberToConvert = 'l96rtvZ';

const digits = {0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"a",11:"b",12:"c",13:"d",14:"e",15:"f",16:"g",17:"h",18:"i",19:"j",20:"k",21:"l",22:"m",23:"n",24:"o",
   25:"p",26:"q",27:"r",28:"s",29:"t",30:"u",31:"v",32:"w",33:"x",34:"y",35:"z",36:"A",37:"B",38:"C",39:"D",40:"E",41:"F",42:"G",43:"H",44:"I",45:"J",46:"K",47:"L",48:"M",
       49:"N",50:"O",51:"P",52:"Q",53:"R",54:"S",55:"T",56:"U",57:"V",58:"W",59:"X",60:"Y",61:"Z",62:"+",63:"/"};

let raisedByOne = [];
let raisedToPower = [];
let convertedNumber = [];

let mainDigitCharValidation = () => {

   let brokenDownNumber = Array.from(numberToConvert.toString()).map(String).reverse();

   function getKeyByValue(object, value) {
      return Object.keys(object).find(key => object[key] === value);
   }

   for (let i = 0; i < numberToConvert.length; i++) {
      convertedNumber.push(getKeyByValue(digits, brokenDownNumber[i]));
      let valueNumb = Object.getOwnPropertyDescriptor(digits, convertedNumber[i]);
      console.log(convertedNumber[i])
      if (convertedNumber[i] > base && convertedNumber[i] > 10) {
         console.log(valueNumb.value + ' is not a base ' + base + ' valid character!');
      } else if (convertedNumber[i] > base && convertedNumber[i] < 10) {
         console.log(valueNumb.value + ' is not a base ' + base + ' valid number!');
      }
   }
}

mainDigitCharValidation();

// console.log(convertedNumber)
let conversionToBase10 = () => {

   const sumFunction = (accumulator, currentValue) => accumulator + currentValue;

   for (let i = 0; i < convertedNumber.length; i++) {
      raisedByOne.push(Math.pow(base, i));
      raisedToPower.push(convertedNumber[i] * raisedByOne[i]);
      // console.log(raisedByOne);
   }

   let finalResult = raisedToPower.reduce(sumFunction);
   console.log(finalResult)
   return finalResult;
}

conversionToBase10()
