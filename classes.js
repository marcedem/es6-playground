// Prototype inheritance in ES5
function Car(options) {
    this.title = options.title;
}

Car.prototype.drive = function () {
    return 'vroom';
}

function Toyota(options) {
    Car.call(this, options);
    this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

const toyota = new Toyota({color: 'red', title: 'Daily Driver'});

const car = new Car({title: 'Focus'});
car.drive();
car;

// ES6 class

class Auto {

    constructor({title}) {
        this.title = title;
    }

    drive() {
        return 'vroom';
    }
}


class Renault extends Auto{

    constructor(options) {
        super(options);
        this.color = options.color;
    }

    honk(){
        return ' beep';
    }
}

const auto = new Auto();
auto.drive();

const renault  = new Renault({ color: 'red'});