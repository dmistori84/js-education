import {cars} from './cars.js';

console.table(cars);

const result = cars.filter(car=>car.make==='Toyota');

console.table(result);
console.table(cars);