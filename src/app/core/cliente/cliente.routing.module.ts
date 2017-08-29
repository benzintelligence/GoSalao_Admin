import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';

const clienteRoutes: Routes = [
    { path: 'clientes', component: ClienteListaComponent },
    { path: 'clientes/novo', component: ClienteFormComponent },
    { path: 'clientes/editar/:id', component: ClienteFormComponent },
    { path: 'clientes/detalhe/:id', component: ClienteDetalheComponent }
];

@NgModule({
    imports: [RouterModule.forChild(clienteRoutes)],
    exports: [RouterModule]
})
export class ClienteRoutingModule { }
