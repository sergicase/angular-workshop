import { ICar } from './car.interface'
export class CarsService {
     
	public cars: ICar[] = [
        { name: 'i3', speed: 240, brand: 'BMW', image: 'http://blog.caranddriver.com/wp-content/uploads/2013/07/2014-BMW-i3-EV.jpg' },
        { name: 'R8', speed: 270, brand: 'Audi', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/E-tron_(Audi)_at_IAA_-_front.JPG' },
        { name: 'Huracan', speed: 320, brand: 'Lamborghini', image: 'http://blog.caranddriver.com/wp-content/uploads/2013/12/2014-Lamborghini-Hurac%C3%A1n-leaked-photo-626x382.jpg' },
        { name: 'Veyron', speed: 400, brand: 'Buggati', image: 'http://images.cdn.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/bugatti-veyron-super-sport-.jpg?itok=CwYkkjOl' },
        { name: 'Astra', speed: 400, brand: 'Opel', image: 'http://www.opel.de/content/dam/Opel/Europe/master/hq/en/01_Vehicles/01_PassengerCars/Astra%20Hatchback%202015/Redesign/Family/Opel_Astra_2015_Family_Hatchback_1024x440_as16_e01_279.jpg' }
    ];

    public motorbikes: ICar[] = [
        { name: 'FZ-10', speed: 240, brand: 'Yamaha', image:'https://www.yamaha-motor.ca/images/pages/products/units/MC/small/2017_FZ-10_Black_3_t.png' },
        { name: 'Cbhornet', speed: 270, brand: 'Honda', image: 'https://media.zigcdn.com/media/model/2016/Feb/honda_cbhornet160r_420x210.jpg' },
        { name: 'XDiavel', speed: 320, brand: 'Ducati', image: 'http://www.ducati.com/cms-web/upl/MediaGalleries/323/1/MediaGallery_1323861/Color_XDiavel-s_01_1067x600.jpg' },
        { name: 'BB', speed: 400, brand: 'Harley-Davidson', image: 'https://s-media-cache-ak0.pinimg.com/originals/45/bb/53/45bb53e81a247acda9eac77f6b885952.jpg' },
        { name: 'GSX', speed: 400, brand: 'Suzuki', image: 'http://www.totalmotorcycle.com/motorcycles/2015/2015-Suzuki-GSX-R1000d.jpg' }
    ]
    public chicks: ICar[] = [
        { name: 'chick1', speed: 240, brand: '1', image: 'http://65.media.tumblr.com/542f928e74ae0cb422fd4b7b3db19015/tumblr_inline_ng3uppDo7l1t6p1tr.jpg' },
        { name: 'chick2', speed: 270, brand: '2', image: 'https://chivethebrigade.files.wordpress.com/2012/09/girls-920-22.jpg' },
        { name: 'chick3', speed: 320, brand: '3', image: 'http://www.sidesinspace.com/wp-content/uploads/2016/03/1455063270140.jpg' },
        { name: 'chick4', speed: 400, brand: '4', image: 'https://598d5fcf392acad97538-395e64798090ee0a3a571e8c148d44f2.ssl.cf1.rackcdn.com/7393507_daily-abspiration-hot-chicks-with-hot-abs_43f061b2_m.jpg?bg=886B60' },
        { name: 'chick5', speed: 400, brand: '5', image: 'http://i244.photobucket.com/albums/gg39/wethead69/hot_chick.jpg' }
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
        return this.cars;
    }

    public getChicks() {
        return this.chicks;
    }

    public getMotorbikes (){
        return this.motorbikes;
    }
}