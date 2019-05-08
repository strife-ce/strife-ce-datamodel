import { Account, EAccountFlags } from '../account';
import { TransientBaseModel } from './base/transient-base-model';

export enum EChatAccountState {
  IDLE = 0,
  QUEUE = 1 << 0,
  PREPARING_MATCH = 1 << 1,
  INGAME = 1 << 2,
}

export class ChatAccount extends TransientBaseModel {
  public static CLASSNAME = 'ChatAccount';
  private _id: string;
  private _name: string;
  private _state: EChatAccountState;
  private _flags: EAccountFlags;

  public constructor(account?: Account) {
    super(ChatAccount.CLASSNAME);
    if (account) {
      this.id = account.id;
      this.name = account.name;
      this.flags = account.flags;
      this.state = EChatAccountState.IDLE;
    }
  }

  public get icon() {
    if (this.hasFlag(EAccountFlags.PATREON_L1)) {
      return 'patreon1';
    } else if (this.hasFlag(EAccountFlags.PATREON_L2)) {
      return 'patreon2';
    } else {
      return null;
    }
  }

  public get iconTooltip() {
    if (this.hasFlag(EAccountFlags.PATREON_L1)) {
      return this.name + ' is a Patreon Supporter';
    } else if (this.hasFlag(EAccountFlags.PATREON_L2)) {
      return this.name + ' is a GRAND Patreon Supporter';
    } else {
      return null;
    }
  }

  public get stateIcon() {
    if (this.state === EChatAccountState.QUEUE) {
      return 'search';
    } else if (this.state === EChatAccountState.PREPARING_MATCH) {
      return 'ellipsis-h';
    } else if (this.state === EChatAccountState.INGAME) {
      return 'gamepad';
    } else {
      return null;
    }
  }

  /**
   * Getter id
   * @return {string}
   */
  public get id(): string {
    return this._id;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Setter id
   * @param {string} value
   */
  public set id(value: string) {
    this._id = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  public hasFlag(flag: EAccountFlags, flag2?: EAccountFlags, flag3?: EAccountFlags): boolean {
    return ((this._flags & flag) > 0 || (this._flags & flag2) > 0 || (this._flags & flag3) > 0);
  }

  public setFlag(flag: EAccountFlags) {
    this._flags = this._flags | flag;
  }

  public unsetFlag(flag: EAccountFlags) {
    this._flags = this._flags & ~flag;
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
   * Getter state
   * @return {EChatAccountState}
   */
  public get state(): EChatAccountState {
    return this._state;
  }

  /**
   * Setter state
   * @param {EChatAccountState} value
   */
  public set state(value: EChatAccountState) {
    this._state = value;
  }


}
TransientBaseModel.registerClass(ChatAccount, ChatAccount.CLASSNAME);
