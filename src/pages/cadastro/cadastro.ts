import {Component} from '@angular/core';
import {Alert, AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Carro} from "../../modelos/carro";
import {AgendamentoServiceProvider} from "../../providers/agendamento-service/agendamento-service";
import {HomePage} from "../home/home";
import {Agendamento} from "../../modelos/agendamento";
import {AgendamentoDaoProvider} from "../../providers/agendamento-dao/agendamento-dao";

@IonicPage()
@Component({
    selector: 'page-cadastro',
    templateUrl: 'cadastro.html',
})
export class CadastroPage {
	public carro : Carro;
	public precoTotal : number;

	public nome: string = '';
	public endereco: string = '';
	public email: string = '';
	public data: string = new Date().toISOString();

    private _alerta : Alert;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private _alertCtrl : AlertController,
                private _agendamentoService : AgendamentoServiceProvider,
                private _agendamentoDao : AgendamentoDaoProvider) {
		this.carro = this.navParams.get('carroSelecionado');
		this.precoTotal = this.navParams.get('precoTotal');
    }

	agenda(){
        if(!this.nome || !this.endereco || !this.email){
            this._alertCtrl.create({
                title : 'Preenchimento obrigatório',
                subTitle : 'preencha todos os dados',
                buttons : [
                    {
                        text : 'Ok'
                    }
                ]
            }).present();

            return;
        }

        this._alerta = this._alertCtrl.create({
            title : 'Aviso',
            buttons : [
                {
                    text : 'Ok',
                    handler : () => {
                        this.navCtrl.setRoot(HomePage);
                    }
                }
            ]
        });

        let mensagem = '';
    	let agendamento : Agendamento = {
    	    nomeCliente : this.nome,
            enderecoCliente : this.endereco,
            emailCliente : this.email,
            modeloCarro : this.carro.nome,
            precoTotal: this.precoTotal,
            confirmado: false,
            enviado : false,
            data : this.data
        };

    	this._agendamentoDao.ehDuplicado(agendamento)
            .mergeMap(ehDuplicado => {
                if (ehDuplicado){
                    throw new Error('Agendamento já existente');
                }

                return this._agendamentoService.agenda(agendamento)
            })
            .mergeMap((valor) => {
                let observable = this._agendamentoDao.salva(agendamento);
                if(valor instanceof Error){
                    throw valor;
                }
                return observable;
            })
            .finally(() => this._alerta.setSubTitle(mensagem).present())
            .subscribe(
                () => mensagem = 'Agendamento Realizado!',
                (err : Error) => err.message
            );
	}
}
