import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { ProfissionalListaComponent } from './profissional-lista/profissional-lista.component';

const profissionalRoutes: Routes = [
    { path: 'profissionais', component: ProfissionalListaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(profissionalRoutes)],
    exports: [RouterModule]
})
export class ProfissionalRoutingModule { }