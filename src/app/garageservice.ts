import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Garage } from './garage';

@Injectable()
export class ProductService{
    
    status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];


    productNames: string[] = [
        "Porsche",
        "Ferrari",
        "Lamborghini",
        "Audi",
        "Bmw",
        "Mercedes",
        "McLaren",
        "Aston Martin",
        "Bently",
    
    ];

    constructor(private http: HttpClient){}

    getProductsSmall(){
        return this.http.get<any>('assets/inventory-small.json')
        .toPromise()
        .then(res => <Garage[]>res.data)
        .then(data => {return data});
    }
    
}