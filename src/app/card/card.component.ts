import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface IPlano {
  infos: IInfos;
}

interface IInfos{
  tipo: string;
  preco: number;
}

function handlePlanType(value: string)
{
  console.log('handlePlanType');
  return value.toUpperCase();
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {
  // @ts-ignore
  plano: IPlano = {
    infos: {
      tipo: 'Simples Card',
      preco: 100
    }
  }

  //@Input('planType') planType: string = '';
  @Input({required: true, alias: 'planPriceAlias'}) planPrice: number = 0;

  //Input com Get/Set
  // private _planType: string = '';

  // @Input('planType')
  // set planType(value: string){
  //   this._planType = value.toUpperCase();
  // }

  // get planType(): string{
  //   return this._planType;
  // }


  //Transform Input
  //@Input({alias: 'planType', transform: (value: string) => value.toUpperCase()}) planType : string = '';

  //Input Transform com function
  @Input({alias: 'planType', transform: (value: string) => handlePlanType(value)}) planType : string = '';

  buttonClicked(valueEmitted : boolean){
    console.log('buttonClicked', valueEmitted);
    console.log('planType', this.planType);
  }

}
