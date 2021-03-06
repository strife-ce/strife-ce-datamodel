import { BaseModel, Parse } from './base';
import { GlobalPlayer } from './global-player';

export enum EAccountFlags {
  NONE = 0,
  PATREON_L1 = 1 << 0,
  PATREON_L2 = 1 << 1,
  MODERATOR = 1 << 2,
}

export class Account extends BaseModel {
  public static PARSE_CLASSNAME = 'Account';

  private _name: string;
  private _flags: EAccountFlags;
  private _globalPlayer: GlobalPlayer;
  private _lastLogin: Date;

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

  /**
   * Getter globalPlayer
   * @return {GlobalPlayer}
   */
  public get globalPlayer(): GlobalPlayer {
    return this._globalPlayer;
  }

  /**
   * Setter globalPlayer
   * @param {GlobalPlayer} value
   */
  public set globalPlayer(value: GlobalPlayer) {
    this._globalPlayer = value;
  }


  /**
   * Getter lastLogin
   * @return {Date}
   */
  public get lastLogin(): Date {
    return this._lastLogin;
  }

  /**
   * Setter lastLogin
   * @param {Date} value
   */
  public set lastLogin(value: Date) {
    this._lastLogin = value;
  }

}

BaseModel.registerClass(Account, Account.PARSE_CLASSNAME);
