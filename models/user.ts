import { BaseModel, Parse } from './base';
import { Account } from './account';

export enum EUserSettingEnum {
  CHAT_MUTE = 'CHAT_MUTE',
  LAST_HERO_SELECTION = 'LAST_HERO_SELECTION',
  LAST_PET_SELECTION = 'LAST_PET_SELECTION',
  LAST_GAMEMODE_SELECTION = 'LAST_GAMEMODE_SELECTION',
  LAST_BOT_DIFFICULTY_SELECTION = 'LAST_BOT_DIFFICULTY_SELECTION',
  AUTO_TRANSLATION_MODE = 'AUTO_TRANSLATION_MODE',
}

export class User extends Parse.User {
  public static PARSE_CLASSNAME = '_User';

  private _id: string;
  private _email: string;
  private _username: string;
  private _account: Account;
  private _settings: { [index: string]: any };

  constructor() {
    super(User.PARSE_CLASSNAME);
    BaseModel.initParseObject(this);
    this._settings = {};
    this.setSetting(EUserSettingEnum.CHAT_MUTE, false);
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

  public get settings(): { [index: string]: any } {
    return this._settings;
  }

  public save(): Parse.Promise<this> {
    return BaseModel.save(this, super.save);
  }

  private _setExisted(isExisted: boolean) {
    BaseModel.setExisted(this, isExisted, super['_setExisted']);
  }

  public setSetting(key: EUserSettingEnum, value: any, save = false) {
    if (!this._settings) {
      this._settings = {};
    }
    this._settings[String(key)] = value;
    if (save) {
      this.save();
    }
  }

  public getSetting<T>(key: EUserSettingEnum, defaultValue: T): T {
    if (!this._settings) {
      this._settings = {};
    }

    const value = this._settings[String(key)];
    return ((value !== undefined) ? value : defaultValue) as T;
  }

}

BaseModel.registerClass(User, User.PARSE_CLASSNAME);
