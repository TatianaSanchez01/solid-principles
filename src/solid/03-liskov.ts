/**
 * Las funciones que utilicen punteros o referencias a clases
 * base deben ser capaces de usar objetos de clases derivadas sin saberlo
 *
 * Siendo U un subtipo de T, cualquier instancia de T deberia poder ser
 * sustituida por cualquier instancia de U sin alterar las propiedades
 * del sistema
 */

import { Tesla, Audi, Toyota, Honda, Vehicle } from "./03-liskov-b";

(() => {
  const printCarSeats = (cars: Vehicle[]) => {
    cars.forEach((car) => {
      console.log(car.constructor.name, car.getNumberOfSeats());
    });
  };

  const cars = [new Tesla(7), new Audi(2), new Toyota(5), new Honda(5)];

  printCarSeats(cars);
})();
