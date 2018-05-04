var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Storage } from "@ionic/storage";
var AgendamentoDaoProvider = (function () {
    function AgendamentoDaoProvider(_storage) {
        this._storage = _storage;
    }
    AgendamentoDaoProvider.prototype._geraChave = function (agendamento) {
        return agendamento.emailCliente + agendamento.data.substr(0, 10);
    };
    AgendamentoDaoProvider.prototype.salva = function (agendamento) {
        var promise = this._storage.set(this._geraChave(agendamento), agendamento);
        return Observable.fromPromise(promise);
    };
    AgendamentoDaoProvider.prototype.ehDuplicado = function (agendamento) {
        var promise = this._storage
            .get(this._geraChave(agendamento))
            .then(function (dado) { return dado ? true : false; });
        return Observable.fromPromise(promise);
    };
    AgendamentoDaoProvider.prototype.listaTodos = function () {
        var agendamentos = [];
        var promise = this._storage.forEach(function (agendamento) {
            agendamentos.push(agendamento);
        })
            .then(function () { return agendamentos; });
        return Observable.fromPromise(promise);
    };
    AgendamentoDaoProvider.prototype.recupera = function (agendamentoId) {
        var promise = this._storage
            .get(agendamentoId)
            .then(function (dado) { return dado ? true : false; });
        return Observable.fromPromise(promise);
    };
    return AgendamentoDaoProvider;
}());
AgendamentoDaoProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Storage])
], AgendamentoDaoProvider);
export { AgendamentoDaoProvider };
//# sourceMappingURL=agendamento-dao.js.map