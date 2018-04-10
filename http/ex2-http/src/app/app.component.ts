import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `    
    <input [(ngModel)]="_search" placeholder="city"/>
    <button (click)="doSearchConcatenateUrl()">Search (Conatenate Url)</button>
    <button (click)="doSearchHttpParams1()">Search (Http Params 1)</button>
    <button (click)="doSearchHttpParams2()">Search (Http Params 2)</button>
    <p>JSON {{_result | json}}</p>
  `,
  styles: []
})
export class AppComponent {
  _search = 'Atlanta';
  _result = {};

  constructor(private _http: HttpClient){}

  doSearchConcatenateUrl(){
    const concatenateUrl: string = "https://trailapi-trailapi.p.mashape.com/?q[city_cont]="
      + encodeURIComponent(this._search);

    const mashapeKey = 'jDaUmwPKddmshvrJRplLH2VvIQ5Gp1qAphDjsnx54Dfd40dOa4';

    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Mashape-Key': mashapeKey
    });

    console.log(concatenateUrl);

    this._http.get(concatenateUrl, { headers: httpHeaders }).subscribe(
      res => {
        this._result = res;
        console.log(res)
      },
      error => { console.log('Error')})
  }

  doSearchHttpParams1(){
    const url: string = 'https://trailapi-trailapi.p.mashape.com';
    const mashapeKey = 'jDaUmwPKddmshvrJRplLH2VvIQ5Gp1qAphDjsnx54Dfd40dOa4';

    const httpHeaders = new HttpHeaders(
      {
        'contentType': 'application/json',
        'X-Mashape-Key': mashapeKey
      }
    )

    const params = new HttpParams({
      fromString: 'q[city_cont]=' + this._search
    });

    console.log(params)

    this._http.get(url, { headers: httpHeaders, params}).subscribe(
      res => {
        this._result = res;
        console.log(res)
      }
    )
  }


  doSearchHttpParams2(){
    const url: string = 'https://trailapi-trailapi.p.mashape.com';
    const mashapeKey = 'jDaUmwPKddmshvrJRplLH2VvIQ5Gp1qAphDjsnx54Dfd40dOa4';

    const httpHeaders = new HttpHeaders(
      {
        'contentType': 'application/json',
        'X-Mashape-Key': mashapeKey
    })

    const params = new HttpParams().set('q[city_cont]', this._search);

    this._http.get(url, { headers: httpHeaders, params: params}).subscribe(
      res => { this._result = res }
    )
  }


}
