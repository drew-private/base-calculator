const dropdownBtn = document.getElementById('triggerId');

function changeBases(btn) {
    dropdownBtn.innerText = btn.innerText;
}
// let value1 = document.getElementById('numberConv');
// let value2 = document.getElementById('numberAdding');

function mainCalc() {

    let valueFirst = document.getElementById('numberConv');
    let valueSecond = document.getElementById('numberAdding');

    console.log(valueFirst.value);
    console.log(valueSecond.value);

    let result =+ parseFloat(valueFirst.value) + parseFloat(valueSecond.value);
    console.log(result)
}