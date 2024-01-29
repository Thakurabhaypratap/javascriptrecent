In JavaScript, "classes" are a way to define blueprints for creating objects with similar properties and behaviors. Classes provide a means of organizing and creating objects in a more structured and object-oriented manner. They were introduced in ECMAScript 6 (ES6), the version of JavaScript standardized in 2015.

Here's a basic example of how a class is defined and used in JavaScript:

```javascript
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Method to get the car's details
  getDetails() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

// Creating an instance of the Car class
let myCar = new Car('Toyota', 'Corolla', 2020);

// Accessing properties and calling methods of the instance
console.log(myCar.getDetails()); // Output: 2020 Toyota Corolla
```

In this example:

- `Car` is a class declaration.
- `constructor` is a special method used for initializing objects created with the class. It is called automatically when a new instance of the class is created.
- `getDetails` is a method defined within the class that returns a string representation of the car's details.
- `myCar` is an instance of the `Car` class created using the `new` keyword.

Classes in JavaScript support inheritance, allowing one class to inherit properties and methods from another class. This is achieved using the `extends` keyword. Here's a simple example:

```javascript
class ElectricCar extends Car {
  constructor(make, model, year, batteryCapacity) {
    super(make, model, year); // Call the superclass constructor
    this.batteryCapacity = batteryCapacity;
  }

  // Method to get electric car's details along with battery capacity
  getDetails() {
    return `${super.getDetails()} with ${this.batteryCapacity} kWh battery`;
  }
}

// Creating an instance of the ElectricCar class
let myElectricCar = new ElectricCar('Tesla', 'Model S', 2022, 100);

// Accessing properties and calling methods of the instance
console.log(myElectricCar.getDetails()); // Output: 2022 Tesla Model S with 100 kWh battery
```

In this example, `ElectricCar` is a subclass of `Car`, and it extends the functionality of `Car` by adding a `batteryCapacity` property. The `super` keyword is used within the `constructor` and `getDetails` method to call the corresponding methods of the superclass (`Car`), allowing the subclass to inherit and extend its behavior.