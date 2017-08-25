import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

import { FieldValidatorService } from '../../services/field-validator.service';

@Component({
  selector: 'email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  @Input() parentFormGroup: FormGroup;
  @Input() nameField: string;
  @Input() value: string;
  @Input() messageError: string;

  constructor(
    private _fb: FormBuilder,
    public field: FieldValidatorService
  ) { }

  ngOnInit() {
    let emailField = this._fb.control(this.value, [Validators.required, Validators.email]);
    this.parentFormGroup.addControl('email', emailField);
  }
}