import { Component, OnInit } from '@angular/core';
import { Language } from './language';
import { SwaggerService } from './swagger.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Countries</h1>
        <ul>
          <li *ngFor="let language of _languages">
            {{language.code}}-{{language.name}}-{{language.longCode}}
          </li>
        </ul>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  _languages = new Array<Language>();

  constructor(private _swaggerService: SwaggerService){}

  ngOnInit(){
    this._swaggerService.getLanguages().subscribe(
      res => { this._languages = res },
      error => { console.log('an error occurred') }
    )
  }
}
