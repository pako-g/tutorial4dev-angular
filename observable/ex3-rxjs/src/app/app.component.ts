import { Component } from '@angular/core';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    Search: <input type="text" (keyup)="onChange($event.target.value)" />
    <div *ngFor="let log of logs">
      Search:&nbsp;{{log}}
    </div>
  `,
  styles: []
})
export class AppComponent {
  _searchSubject: Rx.Subject<string>;
  _logs: Array<string> =  [];

  constructor(){
    this._searchSubject = new Rx.Subject<string>();

    //Set  the Subject up to subscribe to events and filter them by debounce events
    // and ensure the are distinct

    this._searchSubject
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe(
        // Handle event. Log it.

        searchText =>

          this._logs.push(searchText)
      );
    }
  public onChange(searchText: string){
    //Emitan event to Subject
    console.log(searchText);
    this._searchSubject.next(searchText);
  }
}
