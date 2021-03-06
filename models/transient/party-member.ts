import { ChatAccount } from './chat-account';
import { EHeroEnum } from './hero.enums';
import { EPetEnum } from './pet.enums';
import { TransientBaseModel } from './base/transient-base-model';

export enum EPartyMemberState {
  NORMAL,
  INVITE_PENDING,
  READY
}

export class PartyMember extends TransientBaseModel {
  public static CLASSNAME = 'PartyMember';

  private _state: EPartyMemberState;
  private _hero: EHeroEnum;
  private _pet: EPetEnum;
  private _chatAccount: ChatAccount;

  public static create(hero: EHeroEnum, pet: EPetEnum) {
    const partyMember = new PartyMember();
    partyMember.state = EPartyMemberState.NORMAL;
    partyMember.hero = hero;
    partyMember.pet = pet;
    return partyMember;
  }

  public static createForInvite(chatAccount: ChatAccount) {
    const partyMember = new PartyMember();
    partyMember.state = EPartyMemberState.INVITE_PENDING;
    partyMember.hero = EHeroEnum.NO_HERO;
    partyMember.pet = EPetEnum.NO_PET;
    partyMember.chatAccount = chatAccount;
    return partyMember;
  }

  constructor() {
    super(PartyMember.CLASSNAME);
  }


  /**
   * Getter state
   * @return {EPartyMemberState}
   */
  public get state(): EPartyMemberState {
    return this._state;
  }

  /**
   * Setter state
   * @param {EPartyMemberState} value
   */
  public set state(value: EPartyMemberState) {
    this._state = value;
  }

  /**
   * Getter hero
   * @return {EHeroEnum}
   */
  public get hero(): EHeroEnum {
    return this._hero;
  }

  /**
   * Getter pet
   * @return {EPetEnum}
   */
  public get pet(): EPetEnum {
    return this._pet;
  }

  /**
   * Getter chatAccount
   * @return {ChatAccount}
   */
  public get chatAccount(): ChatAccount {
    return this._chatAccount;
  }

  /**
   * Setter hero
   * @param {EHeroEnum} value
   */
  public set hero(value: EHeroEnum) {
    this._hero = value;
  }

  /**
   * Setter pet
   * @param {EPetEnum} value
   */
  public set pet(value: EPetEnum) {
    this._pet = value;
  }

  /**
   * Setter chatAccount
   * @param {ChatAccount} value
   */
  public set chatAccount(value: ChatAccount) {
    this._chatAccount = value;
  }
}
TransientBaseModel.registerClass(PartyMember, PartyMember.CLASSNAME);
