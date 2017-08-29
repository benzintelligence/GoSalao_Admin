import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/map';

import { MaterializeModule } from 'angular2-materialize';

import { LayoutModule } from './layout/layout.module';
import { ClienteModule } from './core/cliente/cliente.module';
import { FornecedorModule } from './core/fornecedor/fornecedor.module';
import { AuthenticateModule } from './authenticate/authenticate.module';
import { PagesModule } from './pages/pages.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    MaterializeModule,

    LayoutModule,
    AuthenticateModule,
    ClienteModule,
    FornecedorModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }