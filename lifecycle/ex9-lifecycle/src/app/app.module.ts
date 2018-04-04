import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent, MemberComponent, CrewComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    CrewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
