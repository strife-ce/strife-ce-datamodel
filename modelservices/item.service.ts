import { Injectable } from '@angular/core';
import {items as itemCollection} from '../json/items.json';
import { ErrorService } from '../services';
import { BasicItem, Item, ItemEmpowerment } from '../models';

@Injectable()
export class ItemService {
    private basicItems: Array<BasicItem>;
    private items: Array<Item>;

    constructor(private errorService: ErrorService) {
        this.basicItems = itemCollection.basic;
        this.items = itemCollection.recipes;
        this.prepareDescriptions(this.basicItems);
        this.prepareDescriptions(this.items);
    }

    public getBasicItems() {
        return this.basicItems;
    }

    public getBasicItemsByFilter(filter: string) {
        return this.basicItems.filter(i => i.filters.indexOf(filter) >= 0);
    }

    public getItems() {
        return this.items;
    }

    public getItemsFilter(filter: string) {
        return this.items.filter(i => i.filters.indexOf(filter) >= 0);
    }

    private prepareDescriptions(items: Array<ItemEmpowerment | BasicItem | Item>) {
        for (const item of items as Array<Item>) {
            if (!item.description) {
                item.description = item.complexDescription;
            } else if (!item.complexDescription) {
                item.complexDescription = item.description;
            }

            if (item.empoweredEffects) {
                const effects = new Array();
                for (const key of Object.keys(item.empoweredEffects)) {
                    effects.push(item.empoweredEffects[key]);
                }
                this.prepareDescriptions(effects);
            }
        }
        return items;
    }
}
