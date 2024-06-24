import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  // template: `
  //   <div class="card-button">Adquirir</div>
  // `,
  styleUrl: './card-button.component.scss'
})
export class CardButtonComponent {

  //Input Transform
  @Input({transform: booleanAttribute}) buttonDisabled: boolean = false;

  @Output('buttonClick') buttonClickEmitter = new EventEmitter<boolean>();

  onButtonClick(){
    console.log("onButtonClick");
    this.buttonClickEmitter.emit(true);
  }
}
