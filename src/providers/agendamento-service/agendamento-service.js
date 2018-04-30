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
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
var AgendamentoServiceProvider = (function () {
    function AgendamentoServiceProvider(_http) {
        this._http = _http;
        this._url = 'http://localhost:8080/api/';
    }
    AgendamentoServiceProvider.prototype.agenda = function (agendamento) {
        return this._http
            .post(this._url + 'agendamento/agenda', agendamento)
            .do(function () { return agendamento.enviado = true; })
            .catch(function (err) { return Observable.of(new Error('Falha no agendamento! Tente novamente mais tarde.')); });
    };
    return AgendamentoServiceProvider;
}());
AgendamentoServiceProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], AgendamentoServiceProvider);
export { AgendamentoServiceProvider };
//# sourceMappingURL=agendamento-service.js.map