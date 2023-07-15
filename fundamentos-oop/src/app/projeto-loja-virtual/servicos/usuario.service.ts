import { Injectable } from '@angular/core';
import { IUsuario } from '../interface/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuario!: IUsuario;

  constructor() { }

  adicionarUsuario(usuario: IUsuario) {
    this.usuario = usuario;
  }

  getUsuario(): IUsuario {
    return this.usuario;
  }

}
