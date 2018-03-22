import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent, Paragraph, Person } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    Paragraph,
    Person
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
