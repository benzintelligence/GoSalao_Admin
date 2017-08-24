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
  formulario: FormGroup;
  fornecedor: Fornecedor;

  constructor(
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _fieldValidatorService: FieldValidatorService,
    private _serviceToast: ToastService,
    private _service: FornecedorService
  ) { }

  ngOnInit() {
    this._subscription = this._route.params.subscribe(params => {

      this.fornecedor = new Fornecedor();
      let id = params['id'];

      if (id) {
        this.fornecedor = this._service.obterFornecedorPorId(id);
      }
    });

    this.formulario = this._formBuilder.group({
      nome: [this.fornecedor.nome, [Validators.required, Validators.minLength(3), Validators.pattern(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/) ]],
      email: [this.fornecedor.email, [Validators.required, Validators.email]],
      telefone: [this.fornecedor.telefone, [Validators.required, Validators.pattern(/^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/)]],
      celular: [this.fornecedor.celular, [Validators.required, Validators.pattern(/^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/)]],
      localizacao: this._formBuilder.group({
        cep: [this.fornecedor.cep, [Validators.required, Validators.pattern(/^[0-9]{8}$/), Validators.minLength(8), Validators.maxLength(8)] ],
        logradouro: [this.fornecedor.logradouro, Validators.required],
        numero: [this.fornecedor.numero, Validators.required],
        complemento: [this.fornecedor.complemento],
        bairro: [this.fornecedor.bairro, Validators.required],
        cidade: [this.fornecedor.cidade, Validators.required],
        uf: [this.fornecedor.uf, Validators.required]
      })
    });
  }

  public ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }  

  public onSubmit() {
    console.log(this.formulario);
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
    this.formulario.reset();
    this._serviceToast.toast('Formulário redefinido');
  }

  public verifyValidTouched(campo: string) {
    return this._fieldValidatorService.verifyValidTouched(this.formulario.get(campo))
  }

  public applyCssError(campo: string) {
    return this._fieldValidatorService.applyCssError(this.formulario.get(campo));
  }

  public activeButtonSend() {
    return this._fieldValidatorService.activeButtonSend(this.formulario);
  }
}