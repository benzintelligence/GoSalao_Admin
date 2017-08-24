import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FieldControlErrorComponent } from './field-control-error/field-control-error.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { BotaoComponent } from './botao/botao.component';
import { FieldValidatorService } from './services/field-validator.service';
import { ToastService } from './services/toast.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    FieldControlErrorComponent,
    FormDebugComponent,
    BotaoComponent
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,

    FieldControlErrorComponent,
    FormDebugComponent,
    BotaoComponent
  ],
  providers: [
    FieldValidatorService,
    ToastService
  ]
})
export class SharedModule { }