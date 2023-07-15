import { Component } from '@angular/core';
import { UsuarioService } from '../../servicos/usuario.service';
import { Cliente } from '../../modelos/cliente';

@Component({
  selector: 'app-loja-virtual',
  templateUrl: './loja-virtual.component.html',
  styleUrls: ['./loja-virtual.component.css']
})
export class LojaVirtualComponent {
  showProdutosComponent = false
  nome!: string;

  constructor(private usuarioService: UsuarioService){}

  entrarNaLoja(): void {
    this.showProdutosComponent = true;
    this.usuarioService.adicionarUsuario(new Cliente(1, this.nome));
    console.log(this.usuarioService.getUsuario())
  }

}
