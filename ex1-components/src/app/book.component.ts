import { Component, OnInit, Input } from '@angular/core';
import { IBook } from './ibook';

@Component({
  selector: 'app-book',
  template: `
    <p>
     {{theBook.name}} : {{theBook.author}} : {{theBook.isbn}}
    </p>
  `,
  styles: []
})
export class BookComponent implements OnInit {

  @Input('theBook') theBook: IBook;
  constructor() { }

  ngOnInit() {
  }

}
