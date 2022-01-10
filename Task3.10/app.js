let _num = prompt(`Enter number`)
let _flag = true

for (let index = 2; index < _num / 2; index++) {
    if (_num % index == 0) {
        _flag = false
    }

}
document.write(`<h1>` + _flag + `</h1>`)