import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBook } from './ibook';

@Component({
  selector: 'app-book',
  template: `
    <p>
     {{theBook.name}} : {{theBook.author}} : {{theBook.isbn}}
     <button (click)="delete(b)">Delete</button>
    </p>
  `,
  styles: []
})
export class BookComponent implements OnInit {

  @Input('theBook') theBook: IBook;
  @Output() bookDelete = new EventEmitter();
  constructor() { }
  ngOnInit() {}

  delete(b) {
    this.bookDelete.emit(b);
  }
}
