import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from "@angular/router";

import { Profissional } from '../models/profissional';
import { ProfissionalService } from '../profissional.service';

@Component({
  selector: 'app-profissional-detalhe',
  templateUrl: './profissional-detalhe.component.html',
  styleUrls: ['./profissional-detalhe.component.css']
})
export class ProfissionalDetalheComponent implements OnInit, OnDestroy {

  private _subscription: Subscription;
  profissional: Profissional;

  constructor(
    private _route: ActivatedRoute,
    private _service: ProfissionalService) { }

    ngOnInit() {
      this._subscription = this._route.params.subscribe(params =>
        this.profissional = this._service.obterProfissionalPorId(params['id'])
      );
    }
  
    ngOnDestroy() {
      this._subscription.unsubscribe();
    }
}