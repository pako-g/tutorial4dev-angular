export class Post {
  private _title: string = '';
  private _body: string = '';

  constructor(title: string, body: string){
    const titleNaN = title || '';
    const bodyNaN = body || '';
    this._title = titleNaN.length > 10 ? titleNaN.substring(0,9) : titleNaN;
    this._body = bodyNaN.length > 10 ? bodyNaN.substring(0,19) : bodyNaN;
  }


  get title(): string {
    return this._title;
  }

  get body(): string {
    return this._body;
  }


}
