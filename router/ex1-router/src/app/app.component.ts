import { Component } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-peperoni',
  template: `
    <h2>Peperoni</h2>
    <img src="https://www.fruttaweb.com/10049-thickbox_default/peperoni-rossi-biologici-almaverde-bio.jpg">
  `,
  styles: []
})
export class PeperoniComponent {}

@Component({
  selector: 'app-everythimg',
  template: `
    <h2>Everything</h2>
    Size: {{size}}
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0UXyx2jQrCBBBw2N4ofFVw2oWz7keZjDVUB4UDrASE9JHwQdi">
    `,
    styles: []
})
export class EverythingComponent {
  private size = '';

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(
      (params: Object) =>
        this.size = params['size']);
  }
}

@Component({
  selector: 'app-root',
  template: `
   <h1>Pizza</h1>
   <a [routerLink]="['peperoni']">Peperoni</a>
   <a [routerLink]="['everything','small']">Everything Small</a>
   <a [routerLink]="['everything','medium']">Everything Medium</a>
   <a [routerLink]="['everything','large']">Everything Large</a>
   <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
