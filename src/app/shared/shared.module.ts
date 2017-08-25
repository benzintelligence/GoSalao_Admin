import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FieldControlErrorComponent } from './componentes/field-control-error/field-control-error.component';
import { FormDebugComponent } from './componentes/form-debug/form-debug.component';
import { FieldDefaultFormComponent } from './componentes/field-default-form/field-default-form.component';
import { PhoneFormComponent } from './componentes/phone-form/phone-form.component';
import { EmailFormComponent } from './componentes/email-form/email-form.component';
import { EnderecoFormComponent } from './componentes/endereco-form/endereco-form.component';
import { BotaoComponent } from './componentes/botao/botao.component';
import { FieldValidatorService } from './services/field-validator.service';
import { ToastService } from './services/toast.service';
import { ConsultaCepService } from './services/consulta-cep.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    FormDebugComponent,
    FieldControlErrorComponent,
    FieldDefaultFormComponent,
    PhoneFormComponent,
    EmailFormComponent,
    EnderecoFormComponent,
    BotaoComponent
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,

    FormDebugComponent,
    FieldControlErrorComponent,
    FieldDefaultFormComponent,
    PhoneFormComponent,
    EmailFormComponent,
    EnderecoFormComponent,
    BotaoComponent
  ],
  providers: [
    FieldValidatorService,
    ToastService,
    ConsultaCepService
  ]
})
export class SharedModule { }