class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return 'Beep.'
    }
    toString(){
        return `This vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        return 'VROOM!!'
    }
}

class Garage{
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
        this.numVehiclesInGarage = 0;
    }
    add(vehicle){
        if(vehicle instanceof Vehicle){
            if(this.numVehiclesInGarage >= this.capacity){
                return "Sorry, we're full!";   
            }
            this.vehicles.push(vehicle);
            this.numVehiclesInGarage++
        } else {
            return 'Only vehicles are allowed in here!'
        }
    }
        
}

const scion = new Car("Scion", 'Tc', 2012)
const kia = new Car('Kia', 'Forte', 2012);
const harley = new Motorcycle('Harley', 'Davidsbike', 2020)
const arr = new Array();
const garage = new Garage(2);