import {Component} from '@angular/core';
import {AlertController, LoadingController, NavController} from 'ionic-angular';
import { Carro} from "../../modelos/carro";
import {CarrosServiceProvider} from "../../providers/carros-service/carros-service";
import {NavLifecycles} from "../../utils/ionic/nav/nav-lifecycles";
import {HttpErrorResponse} from "@angular/common/http";
import {EscolhaPage} from "../escolha/escolha";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements NavLifecycles{

    public carros : Carro[];

    constructor(public navCtrl: NavController,
                private _loadingCtrl : LoadingController,
                private _alertCtrl : AlertController,
                private _carrosService : CarrosServiceProvider) {

    }

    ionViewDidLoad(){
        let loading = this._loadingCtrl.create({
            content : 'Carregando carros...'
        });

        loading.present();

        this._carrosService.lista()
            .subscribe((carros)=>{
                this.carros = carros;
                loading.dismiss();
            }, (error: HttpErrorResponse) => {
                console.log(error);
                loading.dismiss();
                this._alertCtrl.create({
                    title : 'Falha na conexao',
                    subTitle : 'Nao foi possivel carregar a lista de carros, tente novamente mais tarde',
                    buttons : [
                        { text : 'Ok'}
                    ]
                }).present();
            });
    }

    selecionaCarro(carro: Carro){
        this.navCtrl.push(EscolhaPage.name, {
            carroSelecionado : carro
        });
    }

}
