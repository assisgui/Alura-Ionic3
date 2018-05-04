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
import { AgendamentoServiceProvider } from "../../providers/agendamento-service/agendamento-service";
import { HomePage } from "../home/home";
import { AgendamentoDaoProvider } from "../../providers/agendamento-dao/agendamento-dao";
import { Vibration } from "@ionic-native/vibration";
import { DatePicker } from "@ionic-native/date-picker";
var CadastroPage = (function () {
    function CadastroPage(navCtrl, navParams, _alertCtrl, _agendamentoService, _agendamentoDao, _vibration, _datePicker) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._alertCtrl = _alertCtrl;
        this._agendamentoService = _agendamentoService;
        this._agendamentoDao = _agendamentoDao;
        this._vibration = _vibration;
        this._datePicker = _datePicker;
        this.nome = '';
        this.endereco = '';
        this.email = '';
        this.data = new Date().toISOString();
        this.carro = this.navParams.get('carroSelecionado');
        this.precoTotal = this.navParams.get('precoTotal');
    }
    CadastroPage.prototype.agenda = function () {
        var _this = this;
        if (!this.nome || !this.endereco || !this.email) {
            this._vibration.vibrate(500);
            this._alertCtrl.create({
                title: 'Preenchimento obrigatório',
                subTitle: 'preencha todos os dados',
                buttons: [
                    {
                        text: 'Ok'
                    }
                ]
            }).present();
            return;
        }
        this._alerta = this._alertCtrl.create({
            title: 'Aviso',
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.setRoot(HomePage);
                    }
                }
            ]
        });
        var mensagem = '';
        var agendamento = {
            nomeCliente: this.nome,
            enderecoCliente: this.endereco,
            emailCliente: this.email,
            modeloCarro: this.carro.nome,
            precoTotal: this.precoTotal,
            confirmado: false,
            enviado: false,
            data: this.data,
            visualizado: false
        };
        this._agendamentoDao.ehDuplicado(agendamento)
            .mergeMap(function (ehDuplicado) {
            if (ehDuplicado) {
                throw new Error('Agendamento já existente');
            }
            return _this._agendamentoService.agenda(agendamento);
        })
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
    CadastroPage.prototype.selecionaData = function () {
        var _this = this;
        this._datePicker.show({
            date: new Date(),
            mode: 'date'
        })
            .then(function (data) { return _this.data = data.toISOString(); });
    };
    return CadastroPage;
}());
CadastroPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-cadastro',
        templateUrl: 'cadastro.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        AlertController,
        AgendamentoServiceProvider,
        AgendamentoDaoProvider,
        Vibration,
        DatePicker])
], CadastroPage);
export { CadastroPage };
//# sourceMappingURL=cadastro.js.map