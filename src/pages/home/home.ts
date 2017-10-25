import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    groceries = [];

    constructor(public navCtrl: NavController, public dataService: DataProvider) {
        let groceries = this.dataService.getData();
        groceries = groceries.slice();
        for (let i = 0; i < groceries.length; i++) {
            this.groceries.push(groceries[i]);
        }
    }
}
