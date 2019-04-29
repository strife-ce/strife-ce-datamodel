import { ParseService, Parse } from '../../services/parse.service';
export { Parse };

export interface IPointer {
    __type: string;
    className: string;
    objectId: string;
}

export class BaseModel extends Parse.Object {
    public static registerClass(classObject: any, className: string) {
        Parse.Object.registerSubclass(className, classObject);
    }

    public static save<T extends Parse.Object>(object: T, saveCallback: (attrs?: { [key: string]: any } | null, options?: Parse.Object.SaveOptions) => Parse.Promise<T>): Parse.Promise<T> {
        const ignoredAttrKeys = ['_objCount', '_sessionToken']
        for (const attrKey of Object.keys(object)) {
            if (attrKey[0] === '_' && ignoredAttrKeys.indexOf(attrKey) < 0) {
                object.set(attrKey.substr(1), object[attrKey]);
            }
        }
        if (ParseService.isParseServer()) {
            return saveCallback.bind(object)(null, { useMasterKey: true });
        } else {
            return saveCallback.bind(object)();
        }
    }

    public static setExisted<T extends Parse.Object>(object: T, isExisted: boolean, existedCallback: (arg0: boolean) => void) {

        if (!object.existed()) {
            for (const attrKey of Object.keys(object)) {
                if (attrKey[0] === '_' && attrKey !== '_objCount' && attrKey !== '_id') {
                    delete object[attrKey];
                }
            }
        }

        for (const attrKey of Object.keys(object.attributes)) {
            if (object[attrKey] === undefined) {
                object['_' + attrKey] = object.get(attrKey);
            }
        }
        existedCallback.bind(object)(isExisted);
    }

    constructor(className: string) {
        super(className);
        if (className === '' || className === undefined) {
            console.warn('Constructor called without class name!');
        }
    }

    public save(): Parse.Promise<this> {
        return BaseModel.save(this, super.save);
    }

    public getAsPointer(): IPointer {
        return { __type: 'Pointer', className: this.className, 'objectId': this.id };
    }

    protected initArray(obj: Array<any>) {
        return new Array();
    }

    private _setExisted(isExisted: boolean) {
        BaseModel.setExisted(this, isExisted, super['_setExisted']);
    }
}
