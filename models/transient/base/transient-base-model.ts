export abstract class TransientBaseModel {
  private static classMap = new Map<string, any>();
  private static initializedParser = false;
  private $classname: string;

  public static registerClass(classObject: any, className: string) {
    this.classMap.set(className, classObject);
  }

  constructor(classname: string) {
    this.$classname = classname;
  }

  private static initParser() {
    if (!this.initializedParser) {
      const origParse = JSON.parse;
      JSON.parse = (text: string, receiver) => {
        const object = origParse(text, receiver);
        if (text.indexOf('$classname') >= 0) {
          this.convertObjectToClassIfRequired(object);
        }
        return object;
      };
      this.initializedParser = true;
    }
  }

  private static convertObjectToClassIfRequired(object: any): any {
    if (object instanceof Array) {
      for (let i = 0; i < object.length; ++i) {
        object[i] = this.convertObjectToClassIfRequired(object[i]);
      }
    } else if (object instanceof Object) {
      for (const property in object) {
        if (object.hasOwnProperty(property)) {
          object[property] = this.convertObjectToClassIfRequired(object[property]);
        }
      }
      if (object['$classname']) {
        const constructor = this.classMap.get(object['$classname']);
        object = Object.assign(new (constructor)(), object);
      }
    }
    return object;
  }
}

(TransientBaseModel as any).initParser();
