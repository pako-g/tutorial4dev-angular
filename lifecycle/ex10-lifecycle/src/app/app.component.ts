import { Component, ContentChild, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `<ng-content></ng-content>`,
  styles: []
})
export class CardComponent {

}


@Component({
  selector: 'app-root',
  template: `
    <app-card>{{card}}</app-card>
    <button (click)="pickCard($event)">Card</button>
  `,
  styles: []
})

export class AppComponent implements AfterContentChecked {
  card = CARD_ACE_OF_SPADES;
  // @ContentChild(CardComponent) contentChild: CardComponent;

  ngAfterContentChecked() {
    console.log('content  inside card has been checked' + this.card);
  }

  pickCard() {
    this.card = this.card === CARD_ACE_OF_SPADES ? CARD_TEN_OF_CLUBS : CARD_ACE_OF_SPADES;
  }
}

const CARD_ACE_OF_SPADES = 'ace of spades';
const CARD_TEN_OF_CLUBS = 'then of clubs';


