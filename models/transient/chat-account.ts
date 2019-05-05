import { Account } from '../account';
import { TransientBaseModel } from './base/transient-base-model';

export class ChatAccount extends TransientBaseModel {
  public static CLASSNAME = 'ChatAccount';
  private _id: string;
  private _name: string;
  private _patreon: boolean;

  public constructor(account?: Account) {
    super(ChatAccount.CLASSNAME);
    if (account) {
      this.id = account.id;
      this.name = account.name;
      this.patreon = account.patreon;
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
TransientBaseModel.registerClass(ChatAccount, ChatAccount.CLASSNAME);
