import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from "@angular/common/http";
import {Carro} from "../../modelos/carro";
import {ApiServiceProvider} from "../api-service/api-service";

@Injectable()
export class CarrosServiceProvider {
    constructor(private _http: HttpClient,
                private _url : ApiServiceProvider) {}

    lista(){
        return this._http.get<Carro[]>(this._url.url + 'carro/listaTodos')
    }
}
