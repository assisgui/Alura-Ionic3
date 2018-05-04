import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ApiServiceProvider {
    private _url : string = 'http://10.8.1.110:8080/api/';

    constructor(public http: HttpClient) {}

    get url(){
        return this._url;
    }
}
