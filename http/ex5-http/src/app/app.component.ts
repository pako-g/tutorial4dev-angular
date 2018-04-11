import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx'
@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let post of _posts">
        <b>{{post.title}}:</b>{{post.body}}
      </li>
    </ul>
    <ul>
      <li *ngFor="let post of _postsTwo">
        <b>{{post.title}}:</b>{{post.body}}
      </li>
    </ul>
    
  `,
  styles: []
})
export class AppComponent implements OnInit{
  _posts: Array<Post>;
  _postsTwo = new Array<Post>();

  constructor(private _http: HttpClient){}

  ngOnInit(){

    this._http.get<Array<Post>>("http://jsonplaceholder.typicode.com/posts")
      .subscribe(
        res => {this._postsTwo = res }
      )

    return this._http.get<Array<Post>>("http://jsonplaceholder.typicode.com/posts")
      .map( response => {
        const postsArray: Array<Post> = new Array<Post>();
        for(const responseItem of response){
          const post = new Post(responseItem['title'], responseItem['body']);
          postsArray.push(post);
        }
        return postsArray;
      })
      .subscribe(response => { this._posts = response});
  }

}
