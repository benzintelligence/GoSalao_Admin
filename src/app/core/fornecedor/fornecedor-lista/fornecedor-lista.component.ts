import { FornecedorService } from '../fornecedor.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fornecedor-lista',
  templateUrl: './fornecedor-lista.component.html',
  styleUrls: ['./fornecedor-lista.component.css']
})
export class FornecedorListaComponent {

  constructor(private service: FornecedorService) { }

  obterFornecedores() {
    return this.service.obterFornecedores();
  }

  remover(id: String) {
    console.log('Remover fornecedor!');
  }
}