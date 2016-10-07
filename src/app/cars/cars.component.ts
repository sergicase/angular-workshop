import { ICar } from './car.interface'
import * as angular from 'angular'

import IComponentOption = angular.IComponentOptions;

/// And using that interface helps us to properly configure the component
export const CarsComponent: IComponentOption = {
  
   //3/ We can receive data in component by declaring bindings
  bindings: {
    products: '<'
  },
  //10/ Now controller and template are next to each other
  controller: class {
    public cars: ICar[]

    constructor(Cars: any) {
      'ngInject';

      this.cars = Cars.cars
    }
  },
  template: `
    <div>
      <h1>Shopping list</h1>
      <ul>
        <!-- Now we're using $ctrl instead of vm -->
        <li ng-repeat="car in $ctrl.cars">
          {{ car.name }} - {{ car.speed }} - {{car.brand}}
        </li>
      </ul>
    </div>
  `,
}