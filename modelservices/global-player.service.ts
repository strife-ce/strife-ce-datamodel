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
}
