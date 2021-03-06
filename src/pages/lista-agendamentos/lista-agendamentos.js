var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgendamentoDaoProvider } from "../../providers/agendamento-dao/agendamento-dao";
import { AgendamentoServiceProvider } from "../../providers/agendamento-service/agendamento-service";
var ListaAgendamentosPage = (function () {
    function ListaAgendamentosPage(navCtrl, navParams, _alertCtrl, _agendamentoService, _agendamentoDao) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._alertCtrl = _alertCtrl;
        this._agendamentoService = _agendamentoService;
        this._agendamentoDao = _agendamentoDao;
    }
    ListaAgendamentosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this._agendamentoDao.listaTodos()
            .subscribe(function (agendamentos) {
            _this.agendamentos = agendamentos;
        });
    };
    ListaAgendamentosPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () { return _this.atualizaAgendamentos(); }, 5000);
    };
    ListaAgendamentosPage.prototype.atualizaAgendamentos = function () {
        var _this = this;
        this.agendamentos
            .filter(function (agendamento) { return agendamento.confirmado; })
            .forEach(function (agendamento) {
            agendamento.visualizado = true;
            _this._agendamentoDao.salva(agendamento);
        });
    };
    ListaAgendamentosPage.prototype.reenvia = function (agendamento) {
        var _this = this;
        this._alerta = this._alertCtrl.create({
            title: 'Aviso',
            buttons: [
                {
                    text: 'Ok'
                }
            ]
        });
        var mensagem = '';
        this._agendamentoService.agenda(agendamento)
            .mergeMap(function (valor) {
            var observable = _this._agendamentoDao.salva(agendamento);
            if (valor instanceof Error) {
                throw valor;
            }
            return observable;
        })
            .finally(function () { return _this._alerta.setSubTitle(mensagem).present(); })
            .subscribe(function () { return mensagem = 'Agendamento Realizado!'; }, function (err) { return mensagem = err.message; });
    };
    return ListaAgendamentosPage;
}());
ListaAgendamentosPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-lista-agendamentos',
        templateUrl: 'lista-agendamentos.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        AlertController,
        AgendamentoServiceProvider,
        AgendamentoDaoProvider])
], ListaAgendamentosPage);
export { ListaAgendamentosPage };
//# sourceMappingURL=lista-agendamentos.js.map