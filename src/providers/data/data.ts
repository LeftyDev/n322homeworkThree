import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

/*
 Generated class for the DataProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class DataProvider {

    groceries = [
        {item: "milk"},
        {item: "buttermilk"},
        {item: "coconut"},
        {item: "something"}
    ];

    constructor() {
    }

    getData():Array<Object> {
        return this.groceries;

    }

}
