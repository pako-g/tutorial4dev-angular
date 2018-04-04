import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BookListComponent } from './book-list.component';
import { BookComponent } from './book.component';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
