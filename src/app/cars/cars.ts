import * as angular from 'angular'

import IModule = angular.IModule
import { CarsComponent } from './cars.component'
import { CarsService } from './cars.service'

//4/ We're adding whole products stuff to products module
export const CarsModule: IModule = angular
  .module('app.components.cars', [])
  .component('cars', CarsComponent)
  .service('Cars', CarsService)
