import { Component, OnInit } from '@angular/core';
import { ProfissionalService } from '../profissional.service';

@Component({
  selector: 'app-profissional-lista',
  templateUrl: './profissional-lista.component.html',
  styleUrls: ['./profissional-lista.component.css']
})
export class ProfissionalListaComponent implements OnInit {

  constructor(private _service: ProfissionalService) { }

  ngOnInit() {
  }

  obterProfissionais() {
    return this._service.obterProfissionais();
  }

  remover(id: String) {
    console.log(`Profissional ${id}`);
  }
}