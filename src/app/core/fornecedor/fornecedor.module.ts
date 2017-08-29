import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { FornecedorRoutingModule } from './fornecedor.routing.module';
import { FornecedorService } from './fornecedor.service';
import { FornecedorListaComponent } from './fornecedor-lista/fornecedor-lista.component';
import { FornecedorFormComponent } from './fornecedor-form/fornecedor-form.component';
import { FornecedorDetalheComponent } from './fornecedor-detalhe/fornecedor-detalhe.component';

@NgModule({
  imports: [
    SharedModule,
    FornecedorRoutingModule
  ],
  declarations: [
    FornecedorListaComponent,
    FornecedorFormComponent,
    FornecedorDetalheComponent
  ],
  providers: [FornecedorService]
})
export class FornecedorModule { }
