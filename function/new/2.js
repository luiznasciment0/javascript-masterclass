const _new = function(fn, ...params) {
    const obj = {};
    Object.setPrototypeOf(obj, fn.prototype)
    fn.apply(obj, params);
    return obj;
}

const Person = function(name, city, year) {
    this.name = name;
    this.city = city;
    this.year = year;
}

Person.prototype.getAge = function() {
    return new Date().getFullYear() - this.year
}

const person = _new(Person, "Linus Torvalds", "Helsinki", 1969);
const person2 = _new(Person, "Bill Gates", "Seattle", 1955);

console.log(person.getAge())
console.log(person2.getAge())