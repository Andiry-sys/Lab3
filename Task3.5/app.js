let _num = prompt(`Enter number `)

function factorial(num) {
    let newFactorial = num;
    while (num > 1) {
        num--;
        newFactorial *= num;
    }
    return newFactorial;
}
alert(factorial(_num))