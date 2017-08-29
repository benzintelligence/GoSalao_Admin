import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticateRoutingModule } from './authenticate.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AuthenticateRoutingModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  exports: []
})
export class AuthenticateModule { }