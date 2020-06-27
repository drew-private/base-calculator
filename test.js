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

let result = [];

function binary_seq(value) {
    var count = 0;
    while(value > 1) {
        value = Math.floor(value/2); // Update the value of `value`
        result.unshift(value);
        count++;
        console.log(count)
    }
    return count; // Return the value of count
}

binary_seq(1000);

console.log(result)

let numberToConvert = document.getElementById('numberConv').value;
let numberInput = {number: numberToConvert};


const gigGuru = () => {
    console.log(numberInput.number + 'Sa moare viata ta!!!!!!')
}