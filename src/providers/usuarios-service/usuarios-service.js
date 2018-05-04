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
import { ApiServiceProvider } from "../api-service/api-service";
var CHAVE = 'avatar-usuario';
var UsuariosServiceProvider = (function () {
    function UsuariosServiceProvider(_http, _url) {
        this._http = _http;
        this._url = _url;
    }
    UsuariosServiceProvider.prototype.efetuaLogin = function (email, senha) {
        var _this = this;
        return this._http
            .post(this._url.url + 'login', { email: email, senha: senha })
            .do(function (usuario) { _this._usuarioLogado = usuario; });
    };
    UsuariosServiceProvider.prototype.obtemUsuarioLogado = function () {
        return this._usuarioLogado;
    };
    UsuariosServiceProvider.prototype.salvaAvatar = function (avatar) {
        localStorage.setItem(CHAVE, avatar);
    };
    UsuariosServiceProvider.prototype.obtemAvatar = function () {
        return localStorage.getItem(CHAVE)
            ? localStorage.getItem(CHAVE)
            : 'assets/img/avatar-profile.jpg';
    };
    return UsuariosServiceProvider;
}());
UsuariosServiceProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient,
        ApiServiceProvider])
], UsuariosServiceProvider);
export { UsuariosServiceProvider };
//# sourceMappingURL=usuarios-service.js.map