import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let post of _posts">
        <b>{{post.title}}</b>: {{post.body}}
      </li>
    </ul>
    <div *ngIf="_error">
      Error: {{_error.status}}: {{_error.statusText}}
    </div>
    
  `,
  styles: ['div {font-size:20px; padding: 5px; background-color: red;color: white}']
})
export class AppComponent implements OnInit{
  _posts = [];
  _error;

  constructor(private _service: ServiceService){}

  ngOnInit(){
    this._service.getPosts().subscribe(
      response => { this._posts = response },
      error => { this._error = error }
    )
  }
}
