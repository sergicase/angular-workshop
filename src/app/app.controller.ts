import { ICar } from './car.interface'


export class AppController{
    
     public cars: ICar[]

    constructor(AppService: any) {
        'ngInject'
        this.cars = AppService.cars
    }
}