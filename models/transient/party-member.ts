import { ChatAccount } from 'app/data/models';
import { EHeroEnum } from './game.enums';
import { TransientBaseModel } from './base/transient-base-model';

export class PartyMember extends TransientBaseModel {
  public static CLASSNAME = 'PartyMember';

  private _ready: boolean;
  private _hero: EHeroEnum;
  private _pet: string;
  private _chatAccount: ChatAccount;

  public static create(hero: EHeroEnum, pet: string = '') {
    const partyMember = new PartyMember();
    partyMember.ready = false;
    partyMember.hero = hero;
    partyMember.pet = pet;
    return partyMember;
  }

  constructor() {
    super(PartyMember.CLASSNAME);
  }

  /**
   * Getter ready
   * @return {boolean}
   */
  public get ready(): boolean {
    return this._ready;
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
   * @return {string}
   */
  public get pet(): string {
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
   * Setter ready
   * @param {boolean} value
   */
  public set ready(value: boolean) {
    this._ready = value;
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
   * @param {string} value
   */
  public set pet(value: string) {
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
