import { Injectable } from '@angular/core';
import { ErrorService, ParseService, Parse } from '../services';
import { Role, User } from '../models';

@Injectable()
export class RoleService {

    constructor(private errorService: ErrorService, private parseService: ParseService) {
    }

    public getUserRoles(user: User): Promise<Array<Role>> {
        return new Promise<Array<Role>>((resolve, reject) => {
          const defaultQuery = new Parse.Query(Role);
          defaultQuery.equalTo('name', 'default');
          const specificQuery = new Parse.Query(Role);
          specificQuery.equalTo('users', Parse.User.current());
          Parse.Query.or(defaultQuery, specificQuery).find().then(roles => {
              this.addChildRoles(roles).then(allRoles => resolve(allRoles));
          }, error => this.errorService.handleParseErrors(error));
      });
    }

    private addChildRoles(roleArray: Array<Role>): Promise<Array<Role>> {
        return new Promise<Array<Role>>((resolve, reject) => {
            let resultRoles = roleArray;
            if (roleArray.length === 0) {
                resolve(roleArray);
            } else {
                roleArray.forEach((role) => {
                    role.roles.query().find().then((roles) => {
                        resultRoles = resultRoles.concat(roles as Array<Role>);
                        this.addChildRoles(roles as Array<Role>).then((additionalRoles) => {
                            resolve(resultRoles.concat(additionalRoles));
                        });
                    });
                });
            }
        });
    }
}
