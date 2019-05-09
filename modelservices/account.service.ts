import { ErrorService, ParseService, Parse } from '../services';
import { Account } from '../models';
import { BaseModelService } from './base/base-modelservice';

export class AccountService extends BaseModelService<Account> {

    constructor(errorService: ErrorService, parseService: ParseService) {
        super(errorService, parseService, Account);
    }

    public getCurrentAccount() {
        return new Promise<Account>((resolve, reject) => {
            const query = new Parse.Query(Parse.User);
            query.equalTo('objectId', Parse.User.current().id);
            query.include('user.account');
            query.first().then(user => resolve(user.get('account')), error => this.errorService.handleParseErrors(error));
        });
    }

}
