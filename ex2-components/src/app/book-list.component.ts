import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  template: `
    <div class="bookList">
      <p>[book list]</p>
      <app-book *ngFor="let book of books"
        [book]="book"
        (clicked)="onBookClicked($event)">
      </app-book>
    </div>
  `,
  styles: ['.bookList { background-color:#80ced6; margin:10px; padding:10px }']
})
export class BookListComponent implements OnInit {
  private books = [
    { name: 'Angular', author: 'tutorial4dev', isbn: 'an6510984'},
    { name: 'Java', author: 'tutorial4dev', isbn: '0j761092'},
    { name: 'Javascript', author: 'tutorial4dev', isbn: '1js7622'}
  ];

  constructor() { }
  ngOnInit() { }

  onBookClicked(bookName: string) {
    alert('Book Clicked: ' + bookName);
  }
}
