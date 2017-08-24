import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [
    DashboardComponent,
    NotfoundComponent
  ],
  exports: [
    DashboardComponent,
    NotfoundComponent
  ]
})
export class PagesModule { }
