const book1 = {
    name: "Refactoring",
    author: "Martin Fowler"
}

const book2 = {
    name: "Refactoring",
    author: "Martin Fowler"
}

const book3 = JSON.parse(JSON.stringify(book2))

console.log(book3 === book2)
console.log(JSON.stringify(book1) === JSON.stringify(book2))