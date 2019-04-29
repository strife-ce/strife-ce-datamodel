import { BaseModel, Parse } from './base';

export class Account extends BaseModel {
    public static PARSE_CLASSNAME = 'Account';

    private _name: string;

    constructor() {
        super(Account.PARSE_CLASSNAME);
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }
}

BaseModel.registerClass(Account, Account.PARSE_CLASSNAME);
