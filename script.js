// Constructor function for Car
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Add getMakeModel method to the Car prototype
Car.prototype.getMakeModel = function() {
    return this.make + ' ' + this.model;
};

// Constructor function for SportsCar
function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Inherit from Car prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add getTopSpeed method to the SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Create a new instance of SportsCar
const car = new SportsCar("Ferrari", "Testarossa", 200);

// Get the car information and create a display string
const carInfo = car.getMakeModel() + ' with a top speed of ' + car.getTopSpeed() + ' km/h';

// Find the car-info div and set its content
document.getElementById('car-info').textContent = carInfo;