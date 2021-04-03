const javascript = {
    name: 'JavaScript',
    year: 1995,
    paradigm: 'OO and Functional'
};

const javascript2 = {
    name: 'JavaScript',
    year: 1995,
    paradigm: 'OO and Functional'
};

console.log(Object.keys(javascript))
console.log(Object.values(javascript))
console.log(Object.entries(javascript))
console.log(Object.is(javascript, javascript2))
console.log(Object.is(NaN, NaN))