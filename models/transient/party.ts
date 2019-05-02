import { TransientBaseModel } from './base/transient-base-model';
import { ChatAccount } from './chat-account';
import { PartyMember } from './party-member';

export class Party extends TransientBaseModel {
  public static CLASSNAME = 'Party';
  private _id: string;
  private _chief: ChatAccount;
  private _members: Array<PartyMember>;

  public static create(id: string, chief: PartyMember) {
    const party = new Party();
    party.id = id;
    party.chief = chief.chatAccount;
    party.members = new Array();
    party.members.push(chief);
    return party;
  }

  constructor() {
    super(Party.CLASSNAME);
  }

  public get room(): string {
    return 'PARTY_' + this.id;
  }

  /**
   * Getter id
   * @return {string}
   */
  public get id(): string {
    return this._id;
  }

  /**
   * Getter chief
   * @return {ChatAccount}
   */
  public get chief(): ChatAccount {
    return this._chief;
  }

  /**
   * Getter members
   * @return {Array<PartyMember>}
   */
  public get members(): Array<PartyMember> {
    return this._members;
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
   * Setter members
   * @param {Array<PartyMember>} value
   */
  public set members(value: Array<PartyMember>) {
    this._members = value;
  }

}
TransientBaseModel.registerClass(Party, Party.CLASSNAME);
