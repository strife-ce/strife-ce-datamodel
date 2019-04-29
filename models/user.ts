import { BaseModel, Parse } from './base';
import { Account } from './account';

export class User extends Parse.User {
  public static PARSE_CLASSNAME = '_User';

  private _id: string;
  private _email: string;
  private _username: string;
  private _account: Account;
  constructor() {
    super(User.PARSE_CLASSNAME);
  }

  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  public get username(): string {
    return this._username;
  }

  public set username(value: string) {
    this._username = value;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public get account(): Account {
    return this._account;
  }

  public set account(value: Account) {
    this._account = value;
  }

  public save(): Parse.Promise<this> {
    return BaseModel.save(this, super.save);
  }

  private _setExisted(isExisted: boolean) {
    BaseModel.setExisted(this, isExisted, super['_setExisted']);
  }
}

BaseModel.registerClass(User, User.PARSE_CLASSNAME);
