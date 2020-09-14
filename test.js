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

document.getElementById('numberConv').addEventListener("keyup", (event) => {
    // let regex = /(Shift|Backspace|Ctrl|Cmd|CapsLock|Tab|Alt|ContextMenu|Escape|[F0-12])/gi;
    // let regex = /[0-9+\/a-z](!Space|Shift|CapsLock|Alt|ContextMenu|Tab|MediaPlayPause|AudioVolumeMute|[\\"'\]\}\{\[])/gi;
    // let regex = /(a|b|c)/gi
    let regex = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i',
        'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','/','+',];

    let data = event.key;

    let gigi = (exp) => {
        if (data === exp.toString()) {
            console.log('Gigi riki')
        } else {
            event.preventDefault()
        }
    }

    gigi(...regex)

    // console.log(...regex)
    // gigi(...regex);

    // for(let i = 0; i < regex.length; i++) {
    //     if (data !== regex[i]) {
    //         console.log('Sugheti Pla')
    //     }
    // }
    // if(data === regex) {
    //
    //     console.log('MATA MARE');
    // }
})



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

