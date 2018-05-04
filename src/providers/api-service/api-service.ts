import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ApiServiceProvider {
    private _url : string = 'http://192.168.1.103:8080/api/';

    constructor(public http: HttpClient) {}

    get url(){
        return this._url;
    }
}
