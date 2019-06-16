import { ErrorService, ParseService, Parse } from '../services';
import { User } from '../models';
import { BaseModelService } from './base/base-modelservice';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService extends BaseModelService<User> {

    constructor(errorService: ErrorService, parseService: ParseService) {
        super(errorService, parseService, User);
    }

    public getCurrentUser() {
      return new Promise<User>((resolve, reject) => {
          const query = new Parse.Query(User);
          query.equalTo('objectId', Parse.User.current().id);
          query.first().then(user => resolve(user), error => this.errorService.handleParseErrors(error));
      });
  }

    public getBySessionToken(sessionToken: string) {
        return new Promise<User>((resolve, reject) => {
            const query = new Parse.Query(Parse.Session);
            query.equalTo('sessionToken', sessionToken);
            query.include('user.account');
            query.include('user.account.globalPlayer');
            query.include('user.account.globalPlayer.chatRestriction');
            query.include('user.account.globalPlayer.matchRestriction');
            query.first({ useMasterKey: true }).then(session => resolve(session.get('user')), error => this.errorService.handleParseErrors(error));
        });
    }

    public getByEmail(email: string): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            const query = this.createQuery();
            query.equalTo('email', email);
            query.first().then(user => resolve(user), error => this.errorService.handleParseErrors(error));
        });
    }
}
