import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { FornecedorListaComponent } from './fornecedor-lista/fornecedor-lista.component';
import { FornecedorFormComponent } from './fornecedor-form/fornecedor-form.component';
import { FornecedorDetalheComponent } from './fornecedor-detalhe/fornecedor-detalhe.component';

const fornecedorRoutes: Routes = [
    { path: 'fornecedores', component: FornecedorListaComponent },
    { path: 'fornecedores/novo', component: FornecedorFormComponent },
    { path: 'fornecedores/editar/:id', component: FornecedorFormComponent },
    { path: 'fornecedores/detalhe/:id', component: FornecedorDetalheComponent }
    
];

@NgModule({
    imports: [RouterModule.forChild(fornecedorRoutes)],
    exports: [RouterModule]
})
export class FornecedorRoutingModule { }