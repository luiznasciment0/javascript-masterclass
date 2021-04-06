const person = {
    name: "James Gosling",
    city: "Alberta",
    year: 1955,
    getAge: () => new Date().getFullYear() - this.year
}

console.log(person)
console.log(person.getAge())