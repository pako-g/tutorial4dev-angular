import { Author } from './author';
import {Deserializable} from "./deserializable";

export class Book implements Deserializable<Book>{

  private _id: string;
  private _title: string;
  private _author: Author;

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

  get author(): Author {
    return this._author;
  }

  set author(value: Author) {
    this._author = value;
  }


  deserialize(input: any): Book {
    Object.assign(this, input);
    this._author = new Author().deserialize(input.author);
    return this;
  }
}
