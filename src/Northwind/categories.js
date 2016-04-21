import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Categories {
    heading = 'Categories';
    categories = [];

    constructor(http) {
        http.configure(config => {
            config.useStandardConfiguration()
                .withBaseUrl('http://services.odata.org/V3/Northwind/Northwind.svc/');
        });
        this.http = http;
    }

    activate() {
        return this.http.fetch('Sales_by_Categories?$format=json')
            .then(response => response.json())
            .then(data => this.categories = data.value);
    }
}
