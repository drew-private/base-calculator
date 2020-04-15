// const dropdownBtn = document.getElementById('triggerId');
//
// function changeBases(btn) {
//     dropdownBtn.innerText = btn.innerText;
// }
// // let value1 = document.getElementById('numberConv');
// // let value2 = document.getElementById('numberAdding');
//
// function mainCalc() {
//
//     let valueFirst = document.getElementById('numberConv');
//     let valueSecond = document.getElementById('numberAdding');
//
//     console.log(valueFirst.value);
//     console.log(valueSecond.value);
//
//     let result =+ parseFloat(valueFirst.value) + parseFloat(valueSecond.value);
//     console.log(result)
// }
// let result = [];
//
// function binary_seq(value) {
//     var count = 0;
//     while(value > 1) {
//         value = Math.floor(value/2); // Update the value of `value`
//         result.unshift(value);
//         count++;
//         console.log(count)
//     }
//     return count; // Return the value of count
// }
//
// binary_seq(1000);
//
// console.log(result)

let arr = [2, 3, 5, 6, 7, 5];
let basePow = 2;

let finalizedArray = function mainCalculation() {
    //Loop for calculating the exponent
    let exponentArr = [];
    let raisedBinary = [];

    for (i = 0; i < arr.length; i++) {
        exponentArr.push(i);
        raisedBinary.push(Math.pow(basePow, exponentArr[i]));
    }

    //Loop for raising 2 to a power

    // for (i = 0; i < arr.length; i++) {
    //     raisedBinary.push(Math.pow(basePow, exponentArr[i]));
    // }

    //map the mofo with the new values-- Multiply with 2*

    let newArr = arr.map((x, y) => {
      return  x * raisedBinary[y];
    });

    return newArr;
};

console.log(finalizedArray());

// for (i = 0; i < arr.length; i++) {
//     newArr.push(i);
// }
//
// console.log(newArr);
// let newArr = arr.map(function(base, exponent) {
//    return Math.pow(arr[base], exponentArr[exponent]);
// });
// console.log(newArr);

// let newArr = arr.map(x => {
//         // var display = Math.pow(x, pow);
//         var display = x**pow;
//         console.log(pow);
//         return display;
// });


// // console.log(newArr + ' Asta este rezultatul de la array');