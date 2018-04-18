import { Component, OnInit } from '@angular/core';
import {Book} from "./book";
import {BookArray} from "./book-array";

@Component({
  selector: 'app-root',
  template: ``,
  styles: []
})
export class AppComponent implements OnInit {

  books: Array<Book>;
  booksDes: Array<Book> = [];
  booksDesArray: Array<BookArray> = [];
  jsonMsg = `[
      {"id": "111111", "title": "Anguar 5", "author": { "firstname": "John", "lastname": "Doe"}},
      {"id": "222222", "title": "Java 8", "author": { "firstname": "Andrew", "lastname": "Jackson"}}
    ]`;

  jsonMsgArray = `[
      {"id": "111111", "title": "Anguar 5", "authors": [[ "John Doe", "10"]] },
      {"id": "222222", "title": "Java 8", "authors": [ "Mike Bruce", "20"] }
    ]`;

  ngOnInit(){

    this.books = JSON.parse(this.jsonMsg);
    console.log(this.books);
    //console.log(this.books[0]);

    (JSON.parse(this.jsonMsg))
      .map(val => this.booksDes.push( new Book().deserialize(val)));

    console.log(this.booksDes);



    (JSON.parse(this.jsonMsgArray))
      .map(val => this.booksDesArray.push( new BookArray().deserialize(val)));

    console.log(this.booksDesArray);
  }
}
