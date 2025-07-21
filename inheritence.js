class Vehicle {
  constructor(name, price, seat) {
    this.name = name;
    (this.price = price) 
 
  }
  move(carName) {
    console.log(`${carName} gari chole na chole na re`);
  }
}
const vehicle = new Vehicle("van", 500, 5);
console.log(vehicle);
vehicle.move("bus");

// constractor are maddome  object are key and value add kora jay;
class Bus extends Vehicle {
    constructor(name,price,seat,ticketPrice ){
      super(name,price)  

      this.seat = seat;
      this.ticketPrice = ticketPrice;
    }

       
}

class Car extends Vehicle{
  
}
const bus = new Bus('audi');
console.log(bus);
