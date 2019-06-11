import { BaseModel, Parse } from './base';
import { User } from './user';
import { RolePrivilegeEnum, RoleRestrictionEnum } from './transient';

export class GlobalID extends BaseModel {
    public static PARSE_CLASSNAME = '_GlobalID';

    private _globalID: string;
    private _accounts: Array<Account>;

    constructor() {
        super(GlobalID.PARSE_CLASSNAME);
    }

    /**
     * Getter globalID
     * @return {string}
     */
	public get globalID(): string {
		return this._globalID;
	}

    /**
     * Getter accounts
     * @return {Array<Account>}
     */
	public get accounts(): Array<Account> {
		return this._accounts;
	}

    /**
     * Setter globalID
     * @param {string} value
     */
	public set globalID(value: string) {
		this._globalID = value;
	}

    /**
     * Setter accounts
     * @param {Array<Account>} value
     */
	public set accounts(value: Array<Account>) {
		this._accounts = value;
	}


}

BaseModel.registerClass(GlobalID, GlobalID.PARSE_CLASSNAME);
