import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Agendamento} from "../../modelos/agendamento";
import {Storage} from "@ionic/storage";

@Injectable()
export class AgendamentoDaoProvider {
    constructor(private _storage : Storage) {}

    private _geraChave(agendamento : Agendamento){
        return agendamento.emailCliente + agendamento.data.substr(0, 10);
    }

    salva(agendamento : Agendamento){
        let promise = this._storage.set(this._geraChave(agendamento), agendamento);

        return Observable.fromPromise(promise)
    }

    ehDuplicado(agendamento : Agendamento){
        let promise = this._storage
            .get(this._geraChave(agendamento))
            .then(dado => { return dado ? true : false });

        return Observable.fromPromise(promise);
    }

    listaTodos(){
        let agendamentos : Agendamento[] = [];

        let promise = this._storage.forEach((agendamento : Agendamento) => {
            agendamentos.push(agendamento);
        })
            .then(() => agendamentos);

        return Observable.fromPromise(promise);
    }
}
