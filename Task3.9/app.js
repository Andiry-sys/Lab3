let _min = +prompt(`Enter min range values`)
let _max = +prompt(`Enter max range values`)

const range = (min, max) => {
    const arr = Array(max - min + 1)
        .fill(0)
        .map((_, i) => i + min);
    return arr;
}

let array = range(_min, _max)

for (let i = 0; i < array.length; i++) {
    if (array[i] % 4 == 0) {
        console.log(array[i]);
    }
}