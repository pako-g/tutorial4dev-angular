import { Component, ViewChild, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input [(ngModel)]="input" />
    <br/>
    {{input}}
    <div #message></div>
  `,
  styles: []
})
export class AppComponent implements AfterViewChecked{
  input = '';
  @ViewChild('message') message;
  ngAfterViewChecked() {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log('AfterViewCheked');
    console.log(parseInt(this.input));
    if (Number.isNaN(parseInt(this.input))){
      this.message.nativeElement.innerHTML = 'Input not numeric';
    } 
    else {
      this.message.nativeElement.innerHTML = 'Input is numeric';
    }
    
  }
}
