import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Cliente } from '../models/cliente';
import { ClienteService } from '../cliente.service';
import { ToastService } from '../../../shared/services/toast.service';
import { FieldValidatorService } from '../../../shared/services/field-validator.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit, OnDestroy {

  private _subscription: Subscription;
  title: String = 'Novo Cliente';
  form: FormGroup;
  cliente: Cliente;

  constructor(
    public field: FieldValidatorService,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _serviceToast: ToastService,
    private _service: ClienteService
  ) { }

  ngOnInit() {
    this._subscription = this._route.params.subscribe(params => {
      this.cliente = new Cliente();
      const id = params['id'];
      
      if (id) {
        this.cliente = this._service.obterClientePorId(id);
        this.title = `Atualizando Cliente: ${this.cliente.nome}`;
      }
    });

    this.form = this._formBuilder.group({
      nome: [this.cliente.nome, [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(120) ,
              Validators.pattern(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/) ]
            ]
    });
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  public onSubmit() {
    console.log(this.form);
  }

  public resetarForm() {
    this.form.reset();
    this._serviceToast.toast('Formulário redefinido');
  }
}