import { Component } from '@angular/core';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-root',
  template: ``,
  styles: []
})
export class AppComponent {
  constructor(){
    const observable : Rx.Observable<number> = Rx.Observable.range(0,100);
    const subscription: Rx.Subscription = observable.subscribe(
      // Observer
      value => {console.log(`Next: ${value}`) },
      error => {console.log(`Error: ${error}`)},
      () => {console.log('Completed')}
    )
  }
}
