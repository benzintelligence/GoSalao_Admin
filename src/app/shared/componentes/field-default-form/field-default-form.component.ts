import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

import { FieldValidatorService } from '../../services/field-validator.service';

@Component({
  selector: 'field-default-form',
  templateUrl: './field-default-form.component.html',
  styleUrls: ['./field-default-form.component.css']
})
export class FieldDefaultFormComponent implements OnInit {

  @Input() parentFormGroup: FormGroup;
  @Input() nameField: string;
  @Input() value: string;
  @Input() messageError: string;
  @Input() label: string;
  @Input() icon: string = null;
  @Input() alignMessage: boolean = true;
  @Input() validate: boolean = true;

  constructor(
    private _fb: FormBuilder,
    public field: FieldValidatorService
  ) { }

  ngOnInit() {
    // Alinhamento da mensagem em relação ao ícone
    if (!this.icon) {
      this.alignMessage = false;
    }

    // Aplica (ou não) validatores de campo.
    let validatorsDefault = [];
    if (this.validate) {
      validatorsDefault.push(Validators.required);
      validatorsDefault.push(Validators.minLength(3));
      validatorsDefault.push(Validators.maxLength(100));               
      // Validators.pattern(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/)
    }

    let field = this._fb.control(this.value, validatorsDefault);
    this.parentFormGroup.addControl(this.nameField, field);
  }
}