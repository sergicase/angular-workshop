/**
 * Created by oleg.korol on 08/10/16.
 */


import {CarsService} from "./cars.service";
import {ICar} from "./car.interface";

export function CarsFactory (_carsService: CarsService): ICar[] {
    'ngInject';

    return _carsService.getCars();
}