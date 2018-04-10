export class Language {
  private _code: string;
  private _name:string;
  private _longCode: string;


  get longCode(): string {
    return this._longCode;
  }

  set longCode(value: string) {
    this._longCode = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
