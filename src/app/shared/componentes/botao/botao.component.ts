import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent {

  @Input() icon: string;
  @Input() style: string = '';
  @Input() type: string = 'button';
  @Input() disabled: boolean = false;
  @Input() confirmation: boolean = false;
  @Output() actionEvent = new EventEmitter();

  executeAction() {
    if (this.confirmation) {
      if (confirm('Deseja realmente excluir?')) {
        this.actionEvent.emit(null);
      }
      return;
    }

    this.actionEvent.emit(null);
  }
}