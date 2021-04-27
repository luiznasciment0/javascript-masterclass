class Square {
    constructor(side) {
        this.side = side;
    }

    calculateArea() {
        return Math.pow(this.side, 2)
    }
    
    toString() {
        return `side: ${this.side}, area: ${this.calculateArea()}`
    }

    static fromArea(area) {
        return new Square(Math.sqrt(area));
    }
}
const square = new Square(4);
console.log(square);
console.log(square.toString());
console.log(square.calculateArea());

const square2 = Square.fromArea(16);
console.log(square2);
console.log(square2.calculateArea());

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    toString() {
        return `radius: ${this.radius}, area: ${this.calculateArea()}`;
    }

    static fromArea(area) {
        return new Circle(Math.sqrt(area / Math.PI));
    }
}

const circle = new Circle(10);
console.log(circle.toString());
console.log(circle.calculateArea());

const circle2 = Circle.fromArea(314.1592653589793);
console.log(circle2);