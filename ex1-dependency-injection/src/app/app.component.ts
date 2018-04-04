import { Component, OnInit, Input } from '@angular/core';
import { CarService } from './car.service';

@Component({
  selector: 'app-car',
  template: `
    <h3>{{name}} Is supercharges: {{supercharges}}</h3>
  `,
  styles: [],
  providers: []
})

export class CarComponent implements OnInit {

  @Input() name;
  supercharges = '';

  constructor (private service: CarService) {}

  ngOnInit () {
    this.supercharges = this.service.isSuperCharged(this.name);
  }
}


@Component({
  selector: 'app-root',
  template: `
    <app-car name="Ford GT"></app-car>
    <app-car name="Corvette Z06"> </app-car>
  `,
  styles: [],
  providers: [CarService]
})
export class AppComponent {
  title = 'app';
}
