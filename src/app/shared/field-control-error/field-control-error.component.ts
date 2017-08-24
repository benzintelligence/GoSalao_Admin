import { Component, Input } from '@angular/core';

@Component({
  selector: 'field-control-error',
  templateUrl: './field-control-error.component.html',
  styleUrls: ['./field-control-error.component.css']
})
export class FieldControlErrorComponent {

  @Input() msgError: String;
  @Input() showError: boolean;
  @Input() align: boolean = false;

  constructor() { }

  alignPrefix() {
    return this.align ? 'label-error align-prefix' : 'label-error';
  }
}