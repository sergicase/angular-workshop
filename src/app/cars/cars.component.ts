import * as angular from 'angular'


const { listElement } = require('./cars.scss') // tslint:disable-line

import { ICar } from './car.interface'
import IComponentOption = angular.IComponentOptions;
import { CarsService } from './cars.service'
/// And using that interface helps us to properly configure the component
export const CarsComponent: IComponentOption = {
  
   //3/ We can receive data in component by declaring bindings
  bindings: {
    products: '<'
  },
  //10/ Now controller and template are next to each other
  controller: class {
    public cars: ICar[]
    public order_by: string
    public car_service: CarsService

    constructor(cars: ICar[]) {
      'ngInject';

      this.cars = this.car_service.cars
    }

    sortList(){
       switch (this.order_by){
         case "brand":
          this.cars = this.car_service.orderByBrand(this.cars);
         break;
         case "name":
          this.cars = this.car_service.orderByName(this.cars);
         break;
         default:
           this.cars = this.car_service.orderByName(this.cars);
          break;

       }
     
    }
    
    

  },
  template: `
    <div>
      <h1>Shopping list</h1>
      <ul>
        <input type="button" value="Sort By" ng-click="$ctrl.sortList()"/>
        <select ng-model="$ctrl.order_by">
          <option value="brand">Brand</option>
          <option value="name">Name</option>
        </select>
        <!-- Now we're using $ctrl instead of vm -->
        <li ng-repeat="car in $ctrl.cars">
          {{ car.name }} - <span>{{ car.speed }}</span> - {{car.brand}}<br />
          <img src="{{ car.image }}" alt="image" style="width:200px">
        </li>
      </ul>
    </div>
  `,
}