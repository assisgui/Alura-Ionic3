import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Usuario} from "../../modelos/usuario";
import {ApiServiceProvider} from "../api-service/api-service";

const CHAVE = 'avatar-usuario';

@Injectable()
export class UsuariosServiceProvider {
    private _usuarioLogado : Usuario;

    constructor(private _http: HttpClient,
                private _url : ApiServiceProvider) {}

    efetuaLogin(email, senha){
        return this._http
            .post<Usuario>(this._url.url +'login', {email, senha})
            .do((usuario : Usuario) => { this._usuarioLogado = usuario });
    }

    obtemUsuarioLogado(){
        return this._usuarioLogado;
    }

    salvaAvatar(avatar){
        localStorage.setItem(CHAVE, avatar)
    }

    obtemAvatar(){
        return localStorage.getItem(CHAVE)
            ? localStorage.getItem(CHAVE)
            : 'assets/img/avatar-profile.jpg';
    }
}
