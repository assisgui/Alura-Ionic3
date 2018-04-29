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
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import { CarrosServiceProvider } from "../../providers/carros-service/carros-service";
var HomePage = (function () {
    function HomePage(navCtrl, _loadingCtrl, _alertCtrl, _carrosService) {
        this.navCtrl = navCtrl;
        this._loadingCtrl = _loadingCtrl;
        this._alertCtrl = _alertCtrl;
        this._carrosService = _carrosService;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this._loadingCtrl.create({
            content: 'Carregando carros...'
        });
        loading.present();
        this._carrosService.lista()
            .subscribe(function (carros) {
            _this.carros = carros;
            loading.dismiss();
        }, function (error) {
            console.log(error);
            loading.dismiss();
            _this._alertCtrl.create({
                title: 'Falha na conexao',
                subTitle: 'Nao foi possivel carregar a lista de carros, tente novamente mais tarde',
                buttons: [
                    { text: 'Ok' }
                ]
            }).present();
        });
    };
    HomePage.prototype.selecionaCarro = function (carro) {
        console.log(carro);
    };
    return HomePage;
}());
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController,
        LoadingController,
        AlertController,
        CarrosServiceProvider])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map