import { ErrorService, ParseService } from '../../services';
import { User } from '../models';
import { BaseModelService } from './base/base-modelservice';

export class UserService extends BaseModelService<User> {

    constructor(errorService: ErrorService, parseService: ParseService) {
        super(errorService, parseService, User);
    }

    public getByEmail(email: string): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            const query = this.createQuery();
            query.equalTo('email', email);
            query.first().then(user => resolve(user), error => this.errorService.handleParseErrors(error));
        });
    }
}