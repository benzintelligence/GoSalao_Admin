import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { ProfissionalRoutingModule } from './profissional.routing.module';
import { ProfissionalListaComponent } from './profissional-lista/profissional-lista.component';

@NgModule({
  imports: [
    SharedModule,
    ProfissionalRoutingModule
  ],
  declarations: [
    ProfissionalListaComponent
  ]
})
export class ProfissionalModule { }