import { Component } from '@angular/core';
import { IBook } from './ibook';

@Component({
  selector: 'app-root',
  template: `
    <app-book *ngFor="let book of books" [theBook]="book"></app-book>
  `,
  styles: []
})
export class AppComponent {
  books: Array<IBook> = [
    { name: 'Angular', author: 'tutorial4dev', isbn: 'an6510984'},
    { name: 'Java', author: 'tutorial4dev', isbn: '0j761092'},
    { name: 'Javascript', author: 'tutorial4dev', isbn: '1js7622'}
  ];
}
