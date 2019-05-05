import { BaseModel, Parse } from './base';

export class Account extends BaseModel {
  public static PARSE_CLASSNAME = 'Account';

  private _name: string;
  private _patreon: boolean;

  constructor() {
    super(Account.PARSE_CLASSNAME);
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }


  /**
   * Getter patreon
   * @return {boolean}
   */
  public get patreon(): boolean {
    return this._patreon;
  }

  /**
   * Setter patreon
   * @param {boolean} value
   */
  public set patreon(value: boolean) {
    this._patreon = value;
  }

}

BaseModel.registerClass(Account, Account.PARSE_CLASSNAME);
