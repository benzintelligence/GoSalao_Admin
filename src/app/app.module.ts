import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterializeModule } from 'angular2-materialize';

import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { FornecedorModule } from './core/fornecedor/fornecedor.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    MaterializeModule,

    LayoutModule,
    FornecedorModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }