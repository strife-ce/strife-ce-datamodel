export interface ItemEmpowerment {
    id: string;
    cost: number;
    constants: { [key: string]: any };
    description?: string;
    complexDescription?: string;
}

export interface BasicItem extends ItemEmpowerment {
    label: string;
    craftingValue: number;
    filters: Array<string>;
}

export interface Item extends BasicItem {
    components: Array<string>;
    cooldownTime?: number;
    empoweredEffects: {
        [key: string]: ItemEmpowerment
    };
}
