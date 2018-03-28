
import { Component, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit ,
  DoCheck, OnChanges, OnDestroy, OnInit,  Input, SimpleChanges  } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
      <h2>Life Cycle Hook</h2>
      <button (click)="toggle()">Hide/Show Child </button>
      <app-child *ngIf="displayChild"  [message]="'Hello'" ></app-child>
      ` ,
  styles: ['']
})
export class AppComponent implements OnChanges, OnInit, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  displayChild = false;

  constructor() {
    console.log('AppComponent:Constructor');
  }

  toggle() {
    this.displayChild = !this.displayChild;
  }

  ngOnChanges() {
    console.log('AppComponent:OnChanges');
  }


  ngOnInit() {
    console.log('AppComponent:OnInit');
  }

  ngDoCheck() {
    console.log('AppComponent:DoCheck');
  }

   ngAfterContentInit() {
    console.log('AppComponent:AfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('AppComponent:AfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('AppComponent:AfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('AppComponent:AfterViewChecked');
  }

  ngOnDestroy() {
    console.log('AppComponent:OnDestroy');
  }
}
