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

// let arr = [2, 3, 5, 6, 7, 5];
// let basePow = 2;
//
// let finalizedArray = function mainCalculation() {
//     let exponentArr = [];
//     let raisedBinary = [];
//
//     //Loop for calculating the exponent and raising 2* to a power from the exponent array
//
//     for (i = 0; i < arr.length; i++) {
//         exponentArr.push(i);
//         raisedBinary.push(Math.pow(basePow, exponentArr[i]));
//     }
//
//     let newArr = arr.map((x, y) => {
//       return  x * raisedBinary[y];
//     });
//
//     return newArr;
// };
//
// console.log(finalizedArray());

        // var number = 1001010100011,
        //     output = number.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
        //
        // if (output[0].length < 3) {
        //     var paddedArr = output[0].padStart(3, '0');
        //     output.splice(0, 1, paddedArr)
        // } else {
        //     console.log('mata jughe pla')
        // }
        //
        // console.log(output);

let text = 'This is some mother fucking shit forever and ever 890-780-8905, ' +
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit 899.489.9758. ' +
    'Doloribus illum laborum, magnam maiores (980)-343.8950 minima molestiae repellat velit!.';

// let search = text.search(/\w+/gi);
let search = text.match(/\d{3}-\d{3}-\d{4}/g).length;

console.log(search);