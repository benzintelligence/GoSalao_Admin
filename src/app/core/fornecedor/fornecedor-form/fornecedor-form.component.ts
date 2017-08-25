import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { FieldValidatorService } from '../../../shared/services/field-validator.service';
import { ToastService } from '../../../shared/services/toast.service';
import { FornecedorService } from '../fornecedor.service';
import { Fornecedor } from '../models/fornecedor';

@Component({
  selector: 'app-fornecedor-form',
  templateUrl: './fornecedor-form.component.html',
  styleUrls: ['./fornecedor-form.component.css']
})
export class FornecedorFormComponent implements OnInit, OnDestroy {

  private _subscription: Subscription;
  title: string = "Novo Fornecedor";
  form: FormGroup;
  fornecedor: Fornecedor;

  constructor(
    public field: FieldValidatorService,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _serviceToast: ToastService,
    private _service: FornecedorService
  ) { }

  ngOnInit() {
    this._subscription = this._route.params.subscribe(params => {

      this.fornecedor = new Fornecedor();
      let id = params['id'];

      if (id) {
        this.fornecedor = this._service.obterFornecedorPorId(id);
        this.title = `Atualizando Fornecedor: ${this.fornecedor.nome}`;
      }
    });

    this.form = this._formBuilder.group({
      nome: [this.fornecedor.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(120) , Validators.pattern(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/) ]]
    });
  }

  public ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }  

  public onSubmit() {
    console.log(this.form);
    // this._serviceToast.toast('Fornecedor cadastrado com sucesso!', 'rounded green');
    // this._http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
    //     .subscribe(dados => {
    //       console.log(dados);
    //       this.resetarForm();
    //     },
    //       (error: any) => alert(error)
    //     );
  }

  public resetarForm() {
    this.form.reset();
    this._serviceToast.toast('Formulário redefinido');
  }
}