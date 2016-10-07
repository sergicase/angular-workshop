import * as angular from 'angular'

import IModule = angular.IModule
import { CarsModule } from './cars/cars'
import { AppComponent } from './app.component'

//5/ Let's create a module for all components
export const ComponentsModule: IModule = angular
  .module('app.components', [
    CarsModule.name,
  ])
  .component('app', AppComponent)
