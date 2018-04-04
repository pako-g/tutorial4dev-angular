import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent, PeperoniComponent, EverythingComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    PeperoniComponent,
    EverythingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
