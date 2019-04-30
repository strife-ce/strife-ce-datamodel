import { ErrorService, ParseService } from '../../services';
import { User } from '../models';
import { BaseModelService } from './base/base-modelservice';

export class UserService extends BaseModelService<User> {

    constructor(errorService: ErrorService, parseService: ParseService) {
        super(errorService, parseService, User);
    }

    public getBySessionToken(sessionToken: string) {
        return new Promise<User>((resolve, reject) => {
            const query = new Parse.Query(Parse.Session);
            query.equalTo('sessionToken', sessionToken);
            query.include('user.account');
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