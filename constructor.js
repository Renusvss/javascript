class Vehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }
  getVehicleInfo() {
    console.log(`Iam a ${this.name} vehicle with ${this.wheels}wheels on road`);
  }
}
//inheritance also
class SemiTruck extends Vehicle {
  constructor() {
    super(`heavy truck`, 16);
  }
}
const v1 = new Vehicle("BMW", 4);
v1.getVehicleInfo();
const v2 = new SemiTruck();
v2.getVehicleInfo();
