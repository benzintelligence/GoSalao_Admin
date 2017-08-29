import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { ClienteService } from '../cliente.service';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'cliente-detalhe',
  templateUrl: './cliente-detalhe.component.html',
  styleUrls: ['./cliente-detalhe.component.css']
})
export class ClienteDetalheComponent implements OnInit, OnDestroy {

  private _subscription: Subscription;
  cliente: Cliente;

  constructor(
    private _route: ActivatedRoute,
    private _service: ClienteService) { }

    ngOnInit() {
      this._subscription = this._route.params.subscribe(params =>
        this.cliente = this._service.obterClientePorId(params['id'])
      );
    }
  
    ngOnDestroy() {
      this._subscription.unsubscribe();
    }
}
