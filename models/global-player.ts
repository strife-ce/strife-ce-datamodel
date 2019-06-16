import { Account } from './account';
import { BaseModel, Parse } from './base';
import { GlobalPlayerRestriction, ERestrictionType } from './global-player-restriction';

export class GlobalPlayer extends BaseModel {
    public static PARSE_CLASSNAME = 'GlobalPlayer';

    private _accounts: Array<Account>;
    private _tokens: Array<String>;
    private _chatRestriction: GlobalPlayerRestriction;
    private _matchRestriction: GlobalPlayerRestriction;

    public static create() {
        const object = new this();
        object.accounts = new Array();
        object.tokens = new Array();
        return object;
    }

    public constructor() {
        super(GlobalPlayer.PARSE_CLASSNAME);
    }

    /**
     * Getter accounts
     * @return {Array<Account>}
     */
    public get accounts(): Array<Account> {
        return this._accounts;
    }

    /**
     * Getter tokens
     * @return {Array<String>}
     */
    public get tokens(): Array<String> {
        return this._tokens;
    }

    /**
     * Setter accounts
     * @param {Array<Account>} value
     */
    public set accounts(value: Array<Account>) {
        this._accounts = value;
    }

    /**
     * Setter tokens
     * @param {Array<String>} value
     */
    public set tokens(value: Array<String>) {
        this._tokens = value;
    }

    /**
     * Getter chatRestriction
     * @return {GlobalPlayerRestriction}
     */
    public get chatRestriction(): GlobalPlayerRestriction {
        return this._chatRestriction;
    }

    /**
     * Getter matchRestriction
     * @return {GlobalPlayerRestriction}
     */
    public get matchRestriction(): GlobalPlayerRestriction {
        return this._matchRestriction;
    }

    /**
     * Setter chatRestriction
     * @param {GlobalPlayerRestriction} value
     */
    public set chatRestriction(value: GlobalPlayerRestriction) {
        this._chatRestriction = value;
    }

    /**
     * Setter matchRestriction
     * @param {GlobalPlayerRestriction} value
     */
    public set matchRestriction(value: GlobalPlayerRestriction) {
        this._matchRestriction = value;
    }


}

BaseModel.registerClass(GlobalPlayer, GlobalPlayer.PARSE_CLASSNAME);
