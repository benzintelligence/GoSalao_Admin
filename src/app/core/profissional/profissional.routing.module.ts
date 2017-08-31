import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { ProfissionalListaComponent } from './profissional-lista/profissional-lista.component';
import { ProfissionalFormComponent } from './profissional-form/profissional-form.component';
import { ProfissionalDetalheComponent } from './profissional-detalhe/profissional-detalhe.component';


const profissionalRoutes: Routes = [
    { path: 'profissionais', component: ProfissionalListaComponent },
    { path: 'profissionais/novo', component: ProfissionalFormComponent },
    { path: 'profissionais/editar/:id', component: ProfissionalFormComponent },
    { path: 'profissionais/detalhe/:id', component: ProfissionalDetalheComponent }
];

@NgModule({
    imports: [RouterModule.forChild(profissionalRoutes)],
    exports: [RouterModule]
})
export class ProfissionalRoutingModule { }