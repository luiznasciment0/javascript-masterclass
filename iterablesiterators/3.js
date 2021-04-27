const languages = ["Fortran", "Lisp", "COBOL"];
const iterator = languages[Symbol.iterator]();
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

const language = "Fortran";
const iterator2 = language[Symbol.iterator]();
console.log(iterator2.next())
console.log(iterator2.next())
console.log(iterator2.next())
console.log(iterator2.next())