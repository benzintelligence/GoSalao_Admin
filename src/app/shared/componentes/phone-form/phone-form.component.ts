import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

import { FieldValidatorService } from '../../services/field-validator.service';

@Component({
  selector: 'phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css']
})
export class PhoneFormComponent implements OnInit {

  @Input() parentFormGroup: FormGroup;
  @Input() nameField: string;
  @Input() value: string;
  @Input() icon: string;
  @Input() label: string;
  @Input() messageError: string;

  constructor(
    private _fb: FormBuilder,
    public field: FieldValidatorService
  ) { }

  ngOnInit() {
    let phoneField = this._fb.control(this.value, [Validators.required, Validators.pattern(/^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/)]);
    this.parentFormGroup.addControl(this.nameField, phoneField);
  }
}