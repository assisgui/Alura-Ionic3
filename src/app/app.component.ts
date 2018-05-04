import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ListaAgendamentosPage} from "../pages/lista-agendamentos/lista-agendamentos";
import {LoginPage} from "../pages/login/login";
import {PerfilPage} from "../pages/perfil/perfil";
import {UsuariosServiceProvider} from "../providers/usuarios-service/usuarios-service";
import {OneSignal, OSNotification} from "@ionic-native/onesignal";
import {AgendamentoDaoProvider} from "../providers/agendamento-dao/agendamento-dao";
import {Agendamento} from "../modelos/agendamento";

@Component({
    selector : 'myApp',
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage:any = LoginPage;
    public paginas = [
        {titulo : 'Agendamentos', componente : ListaAgendamentosPage.name, icone : 'calendar'},
        {titulo : 'Perfil', componente : PerfilPage.name, icone : 'person'}
    ];
    @ViewChild(Nav) public nav: Nav;

    constructor(platform: Platform,
                statusBar: StatusBar,
                splashScreen: SplashScreen,
                private _usuariosService : UsuariosServiceProvider,
                public oneSignal : OneSignal,
                private _agendamentoDao: AgendamentoDaoProvider) {


        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();

            //Aqui vocë coloca os dados que coletamos no passo 12 e 7
            this.oneSignal.startInit("f34044c6-f1f1-4aec-b114-086e48b53fe3", "AAAA2XLdgOw:APA91bHXLKSPHQdDl2UHxLxEI9J7PIHUKgKsIa2BRMyCcZwyAu0i-0mBCivYJ_Hb-oMKFvLgYuLywNzZQusPRtjWQ7BK52Zr4FEwhu_HrJ_pW4Drc-eYfV3xtNe3viyYFozOeCSrLDWN");

            //Aqui é caso vocë queria que o push apareça mesmo com o APP aberto
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

            //Aqui você vai tratar o recebimento do push notification com todos os dados
            this.oneSignal.handleNotificationOpened()
                .subscribe(data => console.log("Dados do Push", data));

            this.oneSignal.handleNotificationReceived()
                .subscribe((notificacao: OSNotification) => {
                    let dadosAdicionais = notificacao
                        .payload
                        .additionalData;
                    let agendamentoId = dadosAdicionais['agendamento-id'];

                    this._agendamentoDao.recupera(agendamentoId)
                        .subscribe((agendamento: Agendamento) => {
                            agendamento.confirmado = true;
                            this._agendamentoDao.salva(agendamento);
                        });
                });

            this.oneSignal.endInit();
        });
    }

    irParaPagina(componente){
        this.nav.push(componente);
    }

    get usuarioLogado(){
        return this._usuariosService.obtemUsuarioLogado();
    }

    get avatar(){
        return this._usuariosService.obtemAvatar();
    }
}

