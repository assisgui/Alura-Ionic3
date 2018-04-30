var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from "@angular/common/http";
import { CarrosServiceProvider } from '../providers/carros-service/carros-service';
import { AgendamentoServiceProvider } from '../providers/agendamento-service/agendamento-service';
import { IonicStorageModule } from "@ionic/storage";
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import { AgendamentoDaoProvider } from '../providers/agendamento-dao/agendamento-dao';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            HomePage
        ],
        imports: [
            BrowserModule,
            HttpClientModule,
            IonicModule.forRoot(MyApp),
            IonicStorageModule.forRoot({
                name: 'aluracar',
                storeName: 'agendamentos',
                driverOrder: ['indexeddb']
            })
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp,
            HomePage
        ],
        providers: [
            StatusBar,
            SplashScreen,
            {
                provide: ErrorHandler,
                useClass: IonicErrorHandler
            },
            CarrosServiceProvider,
            AgendamentoServiceProvider,
            AgendamentoDaoProvider
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map