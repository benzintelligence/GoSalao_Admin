import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { ProfissionalRoutingModule } from './profissional.routing.module';
import { ProfissionalService } from './profissional.service';
import { ProfissionalListaComponent } from './profissional-lista/profissional-lista.component';
import { ProfissionalFormComponent } from './profissional-form/profissional-form.component';
import { ProfissionalDetalheComponent } from './profissional-detalhe/profissional-detalhe.component';

@NgModule({
  imports: [
    SharedModule,
    ProfissionalRoutingModule
  ],
  declarations: [
    ProfissionalListaComponent,
    ProfissionalFormComponent,
    ProfissionalDetalheComponent
  ],
  providers: [ProfissionalService]
})
export class ProfissionalModule { }