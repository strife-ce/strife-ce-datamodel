import { ErrorService, ParseService, Parse } from '../services';
import { Account } from '../models';
import { BaseModelService } from './base/base-modelservice';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountService extends BaseModelService<Account> {

  constructor(errorService: ErrorService, parseService: ParseService) {
    super(errorService, parseService, Account);
  }

  public getCurrentAccount() {
    return new Promise<Account>((resolve, reject) => {
      const query = new Parse.Query(Parse.User);
      query.equalTo('objectId', Parse.User.current().id);
      query.include('account');
      query.first().then(user => resolve(user.get('account')), error => this.errorService.handleParseErrors(error));
    });
  }

  public getLatestPatrons(count: number) {
    return new Promise<Array<Account>>((resolve, reject) => {
      const query = this.createQuery();
      query.exists('patreonSince');
      query.descending('patreonSince');
      query.limit(count);
      query.find().then(accounts => resolve(accounts), error => this.errorService.handleParseErrors(error));
    });
  }

  public getAccountsByName(accountName: string, includes?: [keyof Account]) {
    return new Promise<Array<Account>>((resolve, reject) => {
      const query = this.createQuery(includes);
      query.matches('name', new RegExp(accountName), 'i');
      query.find().then(accounts => resolve(accounts), error => this.errorService.handleParseErrors(error));
    });
  }
}
