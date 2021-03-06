import { Component } from '@angular/core';
import * as Rx from 'rxjs';
@Component({
  selector: 'app-root',
  template: ``,
  styles: []
})
export class AppComponent {

  constructor() {
    const array: Array<string> = ['event1', 'event2'];
    const observable: Rx.Observable<string[]> = Rx.Observable.of(array);

    observable.subscribe(
      //Observer
      function (x) {
        console.log('Next: ' + x);
      },
      function ( error) {
        console.log('Error: '+ error);
      },
      function () {
        console.log('Completed');
      }
    )
  }
}
