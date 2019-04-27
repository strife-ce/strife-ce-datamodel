import { EventEmitter } from 'events';
import { Injectable } from '@angular/core';
import { Parse } from '../../common-imports';

@Injectable()
export class ErrorService extends EventEmitter {
    constructor() {
        super();
    }

    public handleParseErrors(error: Parse.Error) {
        console.warn('Parse Error!');
        console.warn(error);
        switch (error.code) {
            case 100:
                this.emit('exception', 'The server is currently unreachable. This might be caused by missing internet connectivity or server maintenance.');
                break;
            case 209:
                Parse.User.logOut();
                this.emit('exception', 'The login-session is invalid. Please log in again.', true);
                break;
            default:
                Parse.User.logOut();
        }
    }

    public handleConnectionError(error) {
        console.warn('Connection Error');
        console.warn(error);
        this.emit('exception', 'The server is currently unreachable. This might be caused by missing internet connectivity or server maintenance.');
    }
}
