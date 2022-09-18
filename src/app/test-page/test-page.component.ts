import { Component } from '@angular/core';

import { products } from '../products';

@Component({
    selector: 'app-test-page',
    templateUrl: './test-page.component.html',
    styleUrls: ['./test-page.component.css']
})

export class TestPageComponent{
    products = products;

    share(){
      window.alert('The product has been shared!');
    }
}