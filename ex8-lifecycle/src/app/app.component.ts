import { Component, Input, DoCheck, IterableDiffers } from '@angular/core';

@Component({
  selector: 'app-numbers',
  template: `
    {{numbers}}
    <br/>
    <p *ngFor="let change of changes">
      {{change}}
    </p>`,
  styles: ['.p{padding:0,margin:0']
})

export class NumbersComponent implements DoCheck {
  @Input('numbersArray') numbersArray: Array<string>;
  changes: Array<string> = [];
  differ;

  constructor(private differs: IterableDiffers) {
    this.differ = this.differs.find([]).create(null);
  }

  ngDoCheck() {
    const differences = this.differ.diff(this .numbersArray);
    if (differences) {
      if (differences.forEachAddedItem) {
        differences.forEachAddedItem((item) => {
          if ((item) && (item.item)) {
            this.changes.push('added ' + item.item);
          }
        });
      }
    }
  }
}

@Component({
  selector: 'app-root',
  template: `
    Enter Array (comma-semparated):
    <input [(ngModel)]="numbers"/>
    <br/>
    <app-numbers [numbersArray]="numbers.split(',')"></app-numbers>
  `,
  styles: []
})
export class AppComponent {
  numbers = '';
}
