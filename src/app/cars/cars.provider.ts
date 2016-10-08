import * as angular from 'angular';
import IServiceProvider = angular.IServiceProvider;

import {CarsService} from "./cars.service";
import {ICar} from './car.interface';

export class CarsProvider implements IServiceProvider {
    private motorbikes: boolean = false;

    public enableMotorbikes () {
        this.motorbikes = true;
    }

    $get (carService: CarsService) {
        'ngInject';

        if (this.motorbikes) {
            return carService.getMotorbikes()
        } else {
            return carService.getCars();
        }
    }
}