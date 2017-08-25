import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-debug',
  templateUrl: './form-debug.component.html',
  styleUrls: ['./form-debug.component.css']
})
export class FormDebugComponent {

  @Input() form;

  constructor() { }
}