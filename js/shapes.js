var shapes = {};

class Circle {
    constructor(radius) {
        this.radius = radius;
        this.diameter = radius * 2;
    }
}

shapes.Circle = Circle;

module.exports = shapes;