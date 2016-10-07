import { ICar } from './car.interface'
export class CarsService {
     
	public cars: ICar[] = [
        { name: 'i3', speed: 240, brand: 'BMW' },
        { name: 'R8', speed: 270, brand: 'Audi' },
        { name: 'Huracan', speed: 320, brand: 'Lamborghini' },
        { name: 'Veyron', speed: 400, brand: 'Buggati' },
    ]
}