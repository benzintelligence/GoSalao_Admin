import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

import { Endereco } from '../../models/endereco';
import { FieldValidatorService } from '../../services/field-validator.service';
import { ConsultaCepService } from '../../services/consulta-cep.service';

@Component({
  selector: 'endereco-form',
  templateUrl: './endereco-form.component.html',
  styleUrls: ['./endereco-form.component.css']
})
export class EnderecoFormComponent implements OnInit {

  @Input() parentFormGroup: FormGroup;
  @Input('endereco') end: Endereco;

  constructor(
    public field: FieldValidatorService,
    private _fb: FormBuilder,
    private _cepService: ConsultaCepService
  ) { }

  ngOnInit() {
    let enderecoFields = this._fb.group({
      cep: this._fb.control(this.end.cep, [Validators.required, Validators.pattern(/^[0-9]{8}$/), Validators.minLength(8), Validators.maxLength(8)]),
      logradouro: this._fb.control(this.end.logradouro, [Validators.required]),
      numero: this._fb.control(this.end.numero, [Validators.required]),
      complemento: this._fb.control(this.end.complemento),
      bairro: this._fb.control(this.end.bairro, [Validators.required]),
      cidade: this._fb.control(this.end.cidade, [Validators.required]),
      uf: this._fb.control(this.end.uf, [Validators.required])
    });

    this.parentFormGroup.addControl('endereco', enderecoFields);
  }

  consultarCEP() {
    let cep = this.parentFormGroup.get('endereco.cep').value;
    cep = cep ? cep.replace(/\D/g, '') : '';

    if (cep != '') {
      let cepRegex = /^[0-9]{8}$/;

      if (cepRegex.test(cep)) {
        this._cepService.consultarCEP(cep).subscribe(data => this.popularEndereco(data));
      }
    }
  }

  private popularEndereco(data): void {
    this.parentFormGroup.patchValue({
      endereco: {
        logradouro: data.logradouro,
        complemento: data.complemento,
        bairro: data.bairro,
        cidade: data.localidade,
        uf: data.uf
      }
    });
  }
}