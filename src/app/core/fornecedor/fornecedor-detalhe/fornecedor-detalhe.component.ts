import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { FornecedorService } from '../fornecedor.service';
import { Fornecedor } from '../models/fornecedor';

@Component({
  selector: 'app-fornecedor-detalhe',
  templateUrl: './fornecedor-detalhe.component.html',
  styleUrls: ['./fornecedor-detalhe.component.css']
})
export class FornecedorDetalheComponent implements OnInit, OnDestroy {

  private _subscription: Subscription;
  fornecedor: Fornecedor;

  constructor(
    private _route: ActivatedRoute,
    private _service: FornecedorService) { }

  ngOnInit() {
    this._subscription = this._route.params.subscribe(params =>
      this.fornecedor = this._service.obterFornecedorPorId(params['id'])
    );
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}