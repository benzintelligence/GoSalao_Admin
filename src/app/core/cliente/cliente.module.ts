import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { ClienteRoutingModule } from './cliente.routing.module';
import { ClienteService } from './cliente.service';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';

@NgModule({
  imports: [
    SharedModule,
    ClienteRoutingModule
  ],
  declarations: [
    ClienteListaComponent,
    ClienteFormComponent,
    ClienteDetalheComponent
  ],
  providers: [ClienteService]
})
export class ClienteModule { }
