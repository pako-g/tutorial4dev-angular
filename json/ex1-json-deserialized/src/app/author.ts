import {Deserializable} from "./deserializable";

export class Author implements Deserializable<Author>{

  private _firstname: string;
  private _lastname: string;


  get firstname(): string {
    return this._firstname;
  }

  set firstname(value: string) {
    this._firstname = value;
  }

  get lastname(): string {
    return this._lastname;
  }

  set lastname(value: string) {
    this._lastname = value;
  }

  deserialize(input: any): Author {
    Object.assign(this, input);
    return this;
  }
}
