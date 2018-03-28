import { Component, AfterContentInit, ContentChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-member',
  template: `
    <p [style.backgroundColor]="getBackgroundColor()">
      <ng-content></ng-content>
    </p>
  `,
  styles: ['.p{padding: 5px}']
})

export class MemberComponent {
  selected = false;
  getBackgroundColor() {
    return this.selected ? '#FFCCCC' : '#CCFFFF';
  }
}

@Component({
  selector: 'app-crew',
  template: `<p><ng-content></ng-content></p>`,
  styles: ['']
})

export class CrewComponent implements AfterContentInit {
  @ContentChildren(MemberComponent) members: QueryList<MemberComponent>;

  constructor() {
    console.log(this.members);
  }
  ngAfterContentInit() {
    console.log(this.members);
    this.members.first.selected = true;
  }
}


@Component({
  selector: 'app-root',
  template: `
   <app-crew>
    <app-member>Joe</app-member>
    <app-member>Bruce</app-member>
    <app-member>Nicolas</app-member>
    <app-member>Jessy</app-member>
    <app-member>Pan</app-member>
   </app-crew>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
