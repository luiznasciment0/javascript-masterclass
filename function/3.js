const sum = function() {
    let total = 0
    for (let argument in arguments) {
        total += arguments[argument]
    }
    return total
}

console.log(sum(1, 2, 3, 4, 5))

const sub = function(...numbers) {
    let total = 0
    for (let number of numbers) {
        total -= number
    }
    return total
}

console.log(sub(1, 2, 3, 4, 5))