import { Author } from './author';
import {Deserializable} from "./deserializable";
import {AuthorArray} from "./author-array";
import 'rxjs/add/operator/map';


export class BookArray implements Deserializable<BookArray>{

  private _id: string;
  private _title: string;
  private _authors: Array<AuthorArray>;

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }


  get authors(): Array<AuthorArray> {
    return this._authors;
  }

  set authors(value: Array<AuthorArray>) {
    this._authors = value;
  }

  deserialize(input: any): BookArray {
    Object.assign(this, input);
    this._authors = [];
    input.authors.map((author) => {
      //console.log(author);
      this._authors.push(new AuthorArray().deserialize(author))
    });
    return this;
  }
}
