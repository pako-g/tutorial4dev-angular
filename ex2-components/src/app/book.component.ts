import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-book',
  template: `
    <div class="book" (click)="onClicked()">[book]
    {{book.name}} | {{book.author}}
    </div>
  `,
  styles: ['.book { background-color:#fefbd8; margin:10px; padding:10px }']
})
export class BookComponent implements OnInit {
  @Input() book;
  @Output() clicked: EventEmitter<String> = new EventEmitter<String>();
  constructor() { }
  ngOnInit() { }

  onClicked() {
    this.clicked.emit(this.book.name);
  }

}
