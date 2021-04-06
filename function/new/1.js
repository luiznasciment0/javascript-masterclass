const personPrototype = {
    getAge() {
        return (new Date()).getFullYear() - this.year;
    }
};

const createPerson = (name, city, year) => {
    const person = {
        name,
        city,
        year
    };

    Object.setPrototypeOf(person, personPrototype);

    return person;
};

const person = createPerson("Linus Torvalds", "Helsinki", 1969);
const person2 = createPerson("Bill Gates", "Seattle", 1955);

console.log(person.getAge())
console.log(person2.getAge())