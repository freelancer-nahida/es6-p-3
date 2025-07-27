// class Product {
//   country = "Bangladesh";

//   speak(talk) {
//     console.log(`taking about ${talk}`);
//   }
// }

// const laptop = new Product();

// laptop.speak("kemon aso");
// console.log(laptop);

// class Teacher {
//   lecture(subject) {
//     console.log(`Sir is Teaching ${subject}`);
//   }
// }

// const teachers = new Teacher();

// teachers.lecture("math");
// teachers.lecture("bangla");
// teachers.lecture("Camistry");
//////////////////////////////////
// class Product {
//   country = "Bangladesh";

//   nurani(about) {
//     console.log(`taking about ${about}`);
//   }
// }

// const laptop = new Product();

// laptop.nurani("web devloper");
// laptop.nurani("House wife");
// laptop.nurani(" Member of Pq");
// laptop.nurani(" st of herPower");
// console.log(laptop);

///////////////////////////////////////////
// class Introduction {
//   constructor(name, hscYear, institube) {
//     this.name = name;
//     this.hscYear = hscYear;
//     this.institube = institube;
//   }
// }

// const intro = new Introduction("nahida", 2021, "BM College");
// console.log(intro);
////////////////////////////////////////

class Vehicle {
  constructor(brk, speed, fueltank) {
    this.brk = brk;
    this.speed = speed;
    this.fueltank = fueltank;
  }
}
// class Bus extends Vehicle {
class Motorcycle extends Vehicle {
  constructor(brk, speed, wheel, seat, fueltank) {
    super(brk, speed, fueltank);
    this.wheel = wheel;
    this.speed = seat;
  }
}
// const bus = new Bus(true, true, 4, 150);
const motor = new Motorcycle(true, true, 1, 2, 4);
// console.log(bus);
console.log(motor);
