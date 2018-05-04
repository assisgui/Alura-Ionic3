var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListaAgendamentosPage } from "../pages/lista-agendamentos/lista-agendamentos";
import { LoginPage } from "../pages/login/login";
import { PerfilPage } from "../pages/perfil/perfil";
import { UsuariosServiceProvider } from "../providers/usuarios-service/usuarios-service";
import { OneSignal } from "@ionic-native/onesignal";
import { AgendamentoDaoProvider } from "../providers/agendamento-dao/agendamento-dao";
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, _usuariosService, oneSignal, _agendamentoDao) {
        var _this = this;
        this._usuariosService = _usuariosService;
        this.oneSignal = oneSignal;
        this._agendamentoDao = _agendamentoDao;
        this.rootPage = LoginPage;
        this.paginas = [
            { titulo: 'Agendamentos', componente: ListaAgendamentosPage.name, icone: 'calendar' },
            { titulo: 'Perfil', componente: PerfilPage.name, icone: 'person' }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //Aqui vocë coloca os dados que coletamos no passo 12 e 7
            _this.oneSignal.startInit("f34044c6-f1f1-4aec-b114-086e48b53fe3", "AAAA2XLdgOw:APA91bHXLKSPHQdDl2UHxLxEI9J7PIHUKgKsIa2BRMyCcZwyAu0i-0mBCivYJ_Hb-oMKFvLgYuLywNzZQusPRtjWQ7BK52Zr4FEwhu_HrJ_pW4Drc-eYfV3xtNe3viyYFozOeCSrLDWN");
            //Aqui é caso vocë queria que o push apareça mesmo com o APP aberto
            _this.oneSignal.inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.Notification);
            //Aqui você vai tratar o recebimento do push notification com todos os dados
            _this.oneSignal.handleNotificationOpened()
                .subscribe(function (data) { return console.log("Dados do Push", data); });
            _this.oneSignal.handleNotificationReceived()
                .subscribe(function (notificacao) {
                var dadosAdicionais = notificacao
                    .payload
                    .additionalData;
                var agendamentoId = dadosAdicionais['agendamento-id'];
                _this._agendamentoDao.recupera(agendamentoId)
                    .subscribe(function (agendamento) {
                    agendamento.confirmado = true;
                    _this._agendamentoDao.salva(agendamento);
                });
            });
            _this.oneSignal.endInit();
        });
    }
    MyApp.prototype.irParaPagina = function (componente) {
        this.nav.push(componente);
    };
    Object.defineProperty(MyApp.prototype, "usuarioLogado", {
        get: function () {
            return this._usuariosService.obtemUsuarioLogado();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyApp.prototype, "avatar", {
        get: function () {
            return this._usuariosService.obtemAvatar();
        },
        enumerable: true,
        configurable: true
    });
    return MyApp;
}());
__decorate([
    ViewChild(Nav),
    __metadata("design:type", Nav)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Component({
        selector: 'myApp',
        templateUrl: 'app.html'
    }),
    __metadata("design:paramtypes", [Platform,
        StatusBar,
        SplashScreen,
        UsuariosServiceProvider,
        OneSignal,
        AgendamentoDaoProvider])
], MyApp);
export { MyApp };
//# sourceMappingURL=app.component.js.map