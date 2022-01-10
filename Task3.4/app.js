let _numb1 = prompt('Enter first number');
let _numb2 = prompt('Enter second number');


function calc(a, b) {
    let str = ""
    while (a != 0 & b != 0) {
        if (a > b) {
            a = a % b
            str += a + " "

        }
        else {
            b = b % a
            str += b + " "

        }
    }
    alert(str)
}



calc(_numb1, _numb2)