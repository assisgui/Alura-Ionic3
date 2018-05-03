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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgendamentoDaoProvider } from "../../providers/agendamento-dao/agendamento-dao";
var ListaAgendamentosPage = (function () {
    function ListaAgendamentosPage(navCtrl, navParams, _agendamentoDao) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._agendamentoDao = _agendamentoDao;
    }
    ListaAgendamentosPage.prototype.ionViewLoad = function () {
        var _this = this;
        this._agendamentoDao.listaTodos()
            .subscribe(function (agendamentos) {
            _this.agendamentos = agendamentos;
        });
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
        AgendamentoDaoProvider])
], ListaAgendamentosPage);
export { ListaAgendamentosPage };
//# sourceMappingURL=lista-agendamentos.js.map