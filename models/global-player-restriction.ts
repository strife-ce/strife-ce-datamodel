import { Account } from './account';
import { BaseModel } from './base';

export enum ERestrictionType {
    CHAT,
    MATCH,
}

export class GlobalPlayerRestriction extends BaseModel {
    public static PARSE_CLASSNAME = 'GlobalPlayerRestriction';

    private _createdBy: Account;
    private _explanation: string;
    private _type: ERestrictionType;
    private _from: Date;
    private _to: Date;


    constructor(createdBy: Account, explanation: string, type: ERestrictionType, from: Date, to: Date | number) {
        super(GlobalPlayerRestriction.PARSE_CLASSNAME);
        this.createdBy = createdBy;
        this.explanation = explanation;
        this.type = type;
        this.from = from;

        if (to instanceof Date) {
            this.to = to;
        } else if (from) {
            this.to = new Date(from.getTime() + to * 3600000);
        }
    }

    /**
     * Getter createdBy
     * @return {Account}
     */
    public get createdBy(): Account {
        return this._createdBy;
    }

    /**
     * Getter explanation
     * @return {string}
     */
    public get explanation(): string {
        return this._explanation;
    }

    /**
     * Getter type
     * @return {ERestrictionType}
     */
    public get type(): ERestrictionType {
        return this._type;
    }

    /**
     * Getter from
     * @return {Date}
     */
    public get from(): Date {
        return this._from;
    }

    /**
     * Getter to
     * @return {Date}
     */
    public get to(): Date {
        return this._to;
    }

    /**
     * Setter createdBy
     * @param {Account} value
     */
    public set createdBy(value: Account) {
        this._createdBy = value;
    }

    /**
     * Setter explanation
     * @param {string} value
     */
    public set explanation(value: string) {
        this._explanation = value;
    }

    /**
     * Setter type
     * @param {ERestrictionType} value
     */
    public set type(value: ERestrictionType) {
        this._type = value;
    }

    /**
     * Setter from
     * @param {Date} value
     */
    public set from(value: Date) {
        this._from = value;
    }

    /**
     * Setter to
     * @param {Date} value
     */
    public set to(value: Date) {
        this._to = value;
    }

}
BaseModel.registerClass(GlobalPlayerRestriction, GlobalPlayerRestriction.PARSE_CLASSNAME);