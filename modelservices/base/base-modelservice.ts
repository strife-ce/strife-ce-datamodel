import { ErrorService, ParseService, Parse } from '../../services';
import { PageInfo } from '../../models';

export type FilterCallback = (query: Parse.Query, filterString: string) => any;
export class BaseModelService<T extends Parse.Object> {

    constructor(protected errorService: ErrorService, protected parseService: ParseService, protected modelConstructor: new () => T) {
    }

    public get(includes?: [keyof T]) {
        return new Promise<T[]>((resolve, reject) => {
            const query = this.createQuery(includes);
            query.find().then(objectList => resolve(objectList), error => this.errorService.handleParseErrors(error));
        });
    }

    public getById(objectId: string, includes?: [keyof T]) {
        return this.getFirstByAttribute('objectId', objectId, includes);
    }

    public getByAttribute(attribute: string, value: any, includes?: [keyof T]) {
        return new Promise<T[]>((resolve, reject) => {
            const query = this.createQuery(includes);
            query.equalTo(attribute, value);
            query.limit(99999999);
            query.find().then(objectList => resolve(objectList), error => this.errorService.handleParseErrors(error));
        });
    }

    public getFirstByAttribute(attribute: string, value: any, includes?: [keyof T]) {
        return new Promise<T>((resolve, reject) => {
            const query = this.createQuery(includes);
            query.equalTo(attribute, value);
            query.first().then(object => resolve(object), error => this.errorService.handleParseErrors(error));
        });
    }

    public createQuery(includes?: [keyof T]): Parse.Query<T> {
        const query = new Parse.Query<T>(this.modelConstructor);
        if (ParseService.isParseServer()) {
            query['_find'] = query.find;
            query['_first'] = query.first;
            query.find = (options?: Parse.Query.FindOptions): Parse.Promise<T[]> => {
                options = options || {};
                if (options.useMasterKey === undefined) {
                    options.useMasterKey = true;
                }
                return query['_find'](options);
            };
            query.first = (options?: Parse.Query.FindOptions): Parse.Promise<T> => {
                options = options || {};
                if (options.useMasterKey === undefined) {
                    options.useMasterKey = true;
                }
                return query['_first'](options);
            };
        }

        if (includes) {
            for (const include of includes) {
                query.include(include.toString());
            }
        }

        return query;
    }

    protected applyPageInfo(query: Parse.Query<T>, pageInfo: PageInfo, filterCallback?: FilterCallback): Parse.Query<T> {
        if (pageInfo.filterQuery && filterCallback) {
            query = this.applyFilter(query, pageInfo.filterQuery, filterCallback);
        }

        if (pageInfo) {
            query.count().then((count) => pageInfo.totalCount = count);
            query.limit(pageInfo.rowLimit);
            query.skip(pageInfo.pageOffset * pageInfo.rowLimit);
            if (pageInfo.orderAsc) {
                query.ascending(pageInfo.order);
            } else {
                query.descending(pageInfo.order);
            }
        }
        return query;
    }

    protected applyFilter(query: Parse.Query<T>, filterQuery: string, filterCallback: FilterCallback): Parse.Query<T> {
        return filterCallback(query, filterQuery);
    }
}
