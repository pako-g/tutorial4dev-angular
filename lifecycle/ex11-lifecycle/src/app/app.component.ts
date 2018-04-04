import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   First Input Field: <input #firstInput/>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('firstInput') firstInput;

  ngAfterViewInit() {
    // le variabili ViewChild sono disponibili in questo metodo
    this.firstInput.nativeElement.focus();
  }
}
