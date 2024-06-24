import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto-components';

  inputText = "Texto Inicial Alterado";
  inputType = "text";
  isDisabled = false;
  buttonTitle = "Título do botão";
  buttonDisabled = true;

  enableInput(){
    this.isDisabled = false;
  }

  disabledInput(){
    this.isDisabled = true;
  }

  setPasswordTypeInput(){
    this.inputType = 'password';
  }

  setTextTypeInput(){
    this.inputType = 'text';
  }

  logInputText(){
    console.log(this.inputText);
  }

  handleInputKeyup(event : KeyboardEvent){
    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText);
  }

  handleInputEvent(event : Event){
    const currentText = (event. target as HTMLInputElement).value;
    console.log(currentText);
  }

  onButtonClick(){
    this.buttonTitle = "Título Alteradooooo";
    this.buttonDisabled = !this.buttonDisabled;
  }

  //Style
  widthButton1= '110px';
  widthButton2 = 120;

  stylesObj = {
    width : '160px',
    backgroundColor: 'grey'
  };

  //nada acontece pq nao retorna o objeto alterado e sim so alocando
  updateStyleObj(){
    console.log("updateStyleObj");
    this.stylesObj.width = '170px';
    this.stylesObj.backgroundColor = 'lightblue';
  }

  updateStyleObjCorrect(){
    console.log("updateStyleObjCorrect");

    this.stylesObj = {
      width: '170px',
      backgroundColor: 'lightblue'
    }
  }

  updateWidth(){
    this.widthButton2 = 200;
  }

  //CSS Class Binding
  isRedButton = true;
  isGreen = true;

  //Decorator @Input
    cardPlanType = 'Simples Teste';
    cardPlanPrice = 100;

    handlePlanType(text:string){
      this.cardPlanType = text;

    }
}
