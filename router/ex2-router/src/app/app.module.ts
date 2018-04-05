import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent, PeperoniComponent } from './app.component';
import { OtherComponent } from './other.component';
import { NestedPastaComponent, NestedCalzoneComponent } from './other.component';


@NgModule({
  declarations: [
    AppComponent,
    PeperoniComponent,
    OtherComponent,
    NestedPastaComponent,
    NestedCalzoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
