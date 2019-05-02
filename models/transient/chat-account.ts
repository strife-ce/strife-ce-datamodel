import { Account } from '../account';
import { TransientBaseModel } from './base/transient-base-model';

export class ChatAccount extends TransientBaseModel {
  public static CLASSNAME = 'ChatAccount';
  private _id: string;
  private _name: string;

  public constructor(account?: Account) {
    super(ChatAccount.CLASSNAME);
    if (account) {
      this.id = account.id;
      this.name = account.name;
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

}
TransientBaseModel.registerClass(ChatAccount, ChatAccount.CLASSNAME);
