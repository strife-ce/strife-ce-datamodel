import { ErrorService, ParseService } from '../../services';
import { Account } from '../models';
import { BaseModelService } from './base/base-modelservice';

export class AccountService extends BaseModelService<Account> {

    constructor(errorService: ErrorService, parseService: ParseService) {
        super(errorService, parseService, Account);
    }
}