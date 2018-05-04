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
import { IonicPage, NavController, NavParams, normalizeURL } from 'ionic-angular';
import { UsuariosServiceProvider } from "../../providers/usuarios-service/usuarios-service";
import { Camera } from "@ionic-native/camera";
var PerfilPage = (function () {
    function PerfilPage(navCtrl, navParams, _usuariosService, _camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._usuariosService = _usuariosService;
        this._camera = _camera;
    }
    Object.defineProperty(PerfilPage.prototype, "usuarioLogado", {
        get: function () {
            return this._usuariosService.obtemUsuarioLogado();
        },
        enumerable: true,
        configurable: true
    });
    PerfilPage.prototype.tiraFoto = function () {
        var _this = this;
        this._camera.getPicture({
            destinationType: this._camera.DestinationType.FILE_URI,
            saveToPhotoAlbum: true,
            correctOrientation: true
        })
            .then(function (fotoUri) {
            fotoUri = normalizeURL(fotoUri);
            _this._usuariosService.salvaAvatar(fotoUri);
        })
            .catch(function (err) { return console.log(err); });
    };
    Object.defineProperty(PerfilPage.prototype, "avatar", {
        get: function () {
            return this._usuariosService.obtemAvatar();
        },
        enumerable: true,
        configurable: true
    });
    return PerfilPage;
}());
PerfilPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-perfil',
        templateUrl: 'perfil.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        UsuariosServiceProvider,
        Camera])
], PerfilPage);
export { PerfilPage };
//# sourceMappingURL=perfil.js.map