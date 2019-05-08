import { BaseModel, Parse } from './base';

export enum EAccountFlags {
  NONE = 0,
  PATREON_L1 = 1 << 0,
  PATREON_L2 = 1 << 1,
}

export class Account extends BaseModel {
  public static PARSE_CLASSNAME = 'Account';

  private _name: string;
  private _flags: EAccountFlags;

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
   * Getter flags
   * @return {EAccountFlags}
   */
  public get flags(): EAccountFlags {
    return this._flags;
  }

  /**
   * Setter flags
   * @param {EAccountFlags} value
   */
  public set flags(value: EAccountFlags) {
    this._flags = value;
  }
}

BaseModel.registerClass(Account, Account.PARSE_CLASSNAME);
