import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-child',
  template: `
    <p *ngFor="let change of changes">
      {{change}}
    </p> `,
    styles: []
  })
  export class ChildComponent implements OnChanges {
    @Input('ch') ch;
    changes: Array<string> = [''];
    ngOnChanges(changes: SimpleChanges) {
      this.changes.push(JSON.stringify(changes));
    }
  }


@Component({
  selector: 'app-root',
  template: `
    Field bind to change <input [(ngModel)]="child"/>
    <hr/>
    History <app-child [ch]="child"></app-child>
  `,
  styles: []
})
export class AppComponent  {
  child: '';
}
