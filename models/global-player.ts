import { Account } from './account';
import { BaseModel, Parse } from './base';
import { GlobalPlayerRestriction, ERestrictionType } from './restriction';

export class GlobalPlayer extends BaseModel {
    public static PARSE_CLASSNAME = 'GlobalPlayer';

    private _accounts: Array<Account>;
    private _tokens: Array<String>;
    private _restrictions: Array<GlobalPlayerRestriction>;

    constructor() {
        super(GlobalPlayer.PARSE_CLASSNAME);
        this.accounts = new Array();
        this.tokens = new Array();
        this.restrictions = new Array();
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
     * Getter recentChatRestriction
     * @return {GlobalPlayerRestriction}
     */
    public get currentChatRestriction(): GlobalPlayerRestriction {
        const now = new Date();

        return this.restrictions.find(restriction => {
            console.log('################');
            console.log(restriction);

            console.warn(now);
            console.warn(restriction.from);
            console.warn(now >= restriction.from);
            console.warn(now <= restriction.to);
            return (restriction.type == ERestrictionType.CHAT && now >= restriction.from && now <= restriction.to);
        });
    }

    /**
     * Getter recentChatRestriction
     * @return {GlobalPlayerRestriction}
     */
    public get currentMatchRestriction(): GlobalPlayerRestriction {
        const now = new Date();

        return this.restrictions.find(restriction => {
            console.log('################');
            console.log(restriction);
            console.warn(now + ' ' + restriction.from + ' | ' + (now >= restriction.from));

            return (restriction.type == ERestrictionType.MATCH && now >= restriction.from && now <= restriction.to);
        });
    }

    /**
     * Getter restrictions
     * @return {Array<GlobalPlayerRestriction>}
     */
    public get restrictions(): Array<GlobalPlayerRestriction> {
        return this._restrictions;
    }

    /**
     * Setter restrictions
     * @param {Array<GlobalPlayerRestriction>} value
     */
    public set restrictions(value: Array<GlobalPlayerRestriction>) {
        this._restrictions = value;
    }

}

BaseModel.registerClass(GlobalPlayer, GlobalPlayer.PARSE_CLASSNAME);
