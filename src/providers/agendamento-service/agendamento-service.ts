import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Agendamento} from "../../modelos/agendamento";
import {ApiServiceProvider} from "../api-service/api-service";

@Injectable()
export class AgendamentoServiceProvider {

    constructor(private _http: HttpClient,
                private _url : ApiServiceProvider) {}

    agenda(agendamento : Agendamento){
        return this._http
            .post(this._url.url + 'agendamento/agenda', agendamento)
            .do(() => agendamento.enviado = true)
            .catch((err) => Observable.of(new Error('Falha no agendamento! Tente novamente mais tarde.')));
    }
}
