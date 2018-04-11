import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServiceService {

  constructor(private _http: HttpClient) { }

  getPosts(): Observable<any> {
    return this._http.get("http://jsonplaceholder.typicode.com/postss");
  }
}
