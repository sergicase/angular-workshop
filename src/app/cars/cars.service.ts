import { ICar } from './car.interface'
export class CarsService {
     
	public cars: ICar[] = [
        { name: 'i3', speed: 240, brand: 'BMW' },
        { name: 'R8', speed: 270, brand: 'Audi' },
        { name: 'Huracan', speed: 320, brand: 'Lamborghini' },
        { name: 'Veyron', speed: 400, brand: 'Buggati' },
        { name: 'Astra', speed: 400, brand: 'Opel' }
    ];

     public orderByName (cars: ICar[]) {
       return cars.sort(function (a, b) {
            let a_aux:string  = a.name.toLowerCase();
            let b_aux:string = b.name.toLowerCase();
            if (a_aux > b_aux) {
                return 1;
            }
            if (a_aux < b_aux) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    }; 

    public orderByBrand (cars: ICar[]) {
       return cars.sort(function (a, b) {
            let a_aux:string  = a.brand.toLowerCase();
            let b_aux:string = b.brand.toLowerCase();
            if (a_aux > b_aux) {
                return 1;
            }
            if (a_aux < b_aux) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    }; 

    public getCars (){
        return  this.cars;
    }
}