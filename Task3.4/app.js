let _numb1 = prompt('Enter first number');
let _numb2 = prompt('Enter second number');
let n
let str = ""
if (_numb1 < _numb2) {
    n = _numb1
}
else {
    n = _numb2
}
for (let i = 2; i <= n; i++) {
    if (_numb1 % i == 0 && _numb2 % i == 0) {
        str += i + " "

    }
}

alert(str)

