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
import { HomePage } from "../home/home";
import { UsuariosServiceProvider } from "../../providers/usuarios-service/usuarios-service";
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, _usuariosService, _alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._usuariosService = _usuariosService;
        this._alertCtrl = _alertCtrl;
        this.email = 'joao@alura.com.br';
        this.senha = 'alura123';
    }
    LoginPage.prototype.efetuaLogin = function () {
        var _this = this;
        this._usuariosService.efetuaLogin(this.email, this.senha)
            .subscribe(function () { return _this.navCtrl.setRoot(HomePage); }, function () { return _this._alertCtrl.create({
            title: 'Falha no login',
            subTitle: 'Email ou senha incorretos! Verifique!',
            buttons: [
                { text: 'Ok' }
            ]
        }).present(); });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-login',
        templateUrl: 'login.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        UsuariosServiceProvider,
        AlertController])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.js.map