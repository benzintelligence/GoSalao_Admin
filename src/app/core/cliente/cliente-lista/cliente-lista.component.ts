import { Component, OnInit } from '@angular/core';

import { Cliente } from '../models/cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  constructor(private _service: ClienteService) { }

  ngOnInit() {
  }

  obterClientes() {
    return this._service.obterClientes();
  }

  remover(id: string) {
    console.log(`Cliente ${id}`);
  }
}
