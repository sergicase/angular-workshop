import IComponentOptions = angular.IComponentOptions
import {ICar} from "./cars/car.interface";
import {CarsService} from "./cars/cars.service";
//4/ App component is just a wrapper for products component now
export const AppComponent: IComponentOptions = {
  controller: class {
    public cars: ICar[];

    constructor(Cars: CarsService) {
      'ngInject';

      this.cars = Cars.cars;
    }
  },
  template: `<cars cars="$ctrl.cars"></cars>`,
}
