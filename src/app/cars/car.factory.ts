import {CarsService} from "./cars.service";
import {ICar} from './car.interface';

export function CarsFactory (CarsService: CarsService): ICar[] {
    'ngInject';
    
    return CarsService.getCars();
}