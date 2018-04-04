import { Component, ContentChild, ContentChildren, style} from '@angular/core';

@Component({
  selector: 'Person',
  template: `<div>&nbsp;-&nbsp;<ng-content></ng-content></div>`,
  styles: ['']
})
export class Person {
}


@Component({
  selector: 'Paragraph',
  template: `
  <div>
    <b>{{title.nativeElement.innerHTML}}</b>
    <p><ng-content></ng-content></p>
    <p *ngIf="people">Number of People: {{people.length}}</p>
  </div>`,
  styles: ['p { border: 1px solid #c0c0c0; padding: 10px }']
})
export class Paragraph {
  @ContentChild('title') title;
  @ContentChildren(Person) people;
}

@Component({
  selector: 'app-root',
  template: `
    <p>
      <Paragraph>
        <title #title>Paragraph1</title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <Person>Albertus Falx</Person>
        <Person>Godefridus Turpilius</Person>
        <Person>Demipho Renatus</Person>
      </Paragraph>
      <Paragraph>
        <title #title>Paragraph1</title>
        Praesent eget ornare neque, vel consectetur eros.
        <Person>Hanno Grumio</Person>
        <Person>Lycus Auxilius</Person>
      </Paragraph>
    </p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome to app!';
}

