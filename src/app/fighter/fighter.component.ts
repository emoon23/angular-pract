import { Component, OnInit } from '@angular/core';
import { fighters } from '../fighters';


@Component({
    selector: 'app-fighter',
    templateUrl: './fighter.component.html',
    styleUrls: ['./fighter.component.css']
})


export class FighterComponent{
    fighters = [...fighters]; //This has to match with the html ngFor

    ngOnit(){

    }
}
