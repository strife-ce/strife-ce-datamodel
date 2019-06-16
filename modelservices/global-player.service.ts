import { ErrorService, ParseService, Parse } from '../services';
import { Account } from '../models';
import { BaseModelService } from './base/base-modelservice';
import { Injectable } from '@angular/core';
import { GlobalPlayer } from '../models/global-player';

@Injectable()
export class GlobalPlayerService extends BaseModelService<GlobalPlayer> {

  constructor(errorService: ErrorService, parseService: ParseService) {
    super(errorService, parseService, GlobalPlayer);
  }

  public getWithActiveRestrictions() {
    return new Promise<Array<GlobalPlayer>>((resolve, reject) => {

      const query = Parse.Query.or<GlobalPlayer>(
        this.createQuery().exists('chatRestriction').notEqualTo('chatRestriction', null),
        this.createQuery().exists('matchRestriction').notEqualTo('matchRestriction', null));
      query.include(['accounts', 'chatRestriction', 'matchRestriction']);
      query.find().then(globalPlayers => resolve(globalPlayers), error => this.errorService.handleParseErrors(error));
    });
  }
}
