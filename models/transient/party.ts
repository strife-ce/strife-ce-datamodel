import { Account } from '../account';
import { ChatAccount } from './chat-account';

export class PartyMemberState {
    private _ready: boolean;
    private _hero: string;
    private _pet: string;

    /**
     * Getter ready
     * @return {boolean}
     */
    public get ready(): boolean {
        return this._ready;
    }

    /**
     * Getter hero
     * @return {string}
     */
    public get hero(): string {
        return this._hero;
    }

    /**
     * Getter pet
     * @return {string}
     */
    public get pet(): string {
        return this._pet;
    }

    /**
     * Setter ready
     * @param {boolean} value
     */
    public set ready(value: boolean) {
        this._ready = value;
    }

    /**
     * Setter hero
     * @param {string} value
     */
    public set hero(value: string) {
        this._hero = value;
    }

    /**
     * Setter pet
     * @param {string} value
     */
    public set pet(value: string) {
        this._pet = value;
    }
}

export class Party {
    private _id: string;
    private _chief: ChatAccount;
    private _memberStateMap: Map<ChatAccount, PartyMemberState>;

    public constructor(id: string, chief: ChatAccount, state: PartyMemberState) {
        this.id = id;
        this.chief = chief;
        this.memberStateMap = new Map();
        this.memberStateMap.set(chief, state);
    }

    public get room(): string {
        return 'PARTY_' + this.id;
    }


    /**
     * Getter id
     * @return {string}
     */
    public get id(): string {
        return this.id;
    }

    /**
     * Getter chief
     * @return {ChatAccount}
     */
    public get chief(): ChatAccount {
        return this._chief;
    }

    /**
     * Getter memberStateMap
     * @return {Map<ChatAccount, PartyMemberState>}
     */
    public get memberStateMap(): Map<ChatAccount, PartyMemberState> {
        return this._memberStateMap;
    }

    /**
     * Setter id
     * @param {string} value
     */
    public set id(value: string) {
        this._id = value;
    }
    /**
     * Setter chief
     * @param {ChatAccount} value
     */
    public set chief(value: ChatAccount) {
        this._chief = value;
    }

    /**
     * Setter memberStateMap
     * @param {Map<ChatAccount, PartyMemberState>} value
     */
    public set memberStateMap(value: Map<ChatAccount, PartyMemberState>) {
        this._memberStateMap = value;
    }

}