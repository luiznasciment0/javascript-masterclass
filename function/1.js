const sum = function (a, b) {
    return a + b
};

const sub = function (a, b) {
    return a - b
};

const calculator = function (fn) {
    return function (a, b) {
        return fn(a, b);
    };
};

console.log(sum(2, 2))
console.log(sub(2, 2))
console.log(calculator(sum)(2, 2))
console.log(calculator(sub)(2, 2))
