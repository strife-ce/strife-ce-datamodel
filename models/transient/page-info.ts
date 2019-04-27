export class PageInfo {
    private _order: string;
    private _orderAsc: boolean;
    private _totalCount: number;
    private _pageOffset: number;
    private _rowLimit: number;
    private _filterQuery: string;

    public constructor(rowLimit: number, order: string, orderAsc: boolean = true) {
        this.rowLimit = rowLimit;
        this.order = order;
        this.pageOffset = 0;
        this.orderAsc = orderAsc;
        this.totalCount = 0;
        this.filterQuery = '';
    }

    public get order(): string {
        return this._order;
    }

    public set order(value: string) {
        this._order = value;
    }

    public get orderAsc(): boolean {
        return this._orderAsc;
    }

    public set orderAsc(value: boolean) {
        this._orderAsc = value;
    }

    public get totalCount(): number {
        return this._totalCount;
    }

    public set totalCount(value: number) {
        this._totalCount = value;
    }

    public get pageOffset(): number {
        return this._pageOffset;
    }

    public set pageOffset(value: number) {
        this._pageOffset = value;
    }

    public get rowLimit(): number {
        return this._rowLimit;
    }

    public set rowLimit(value: number) {
        this._rowLimit = value;
    }

    public get filterQuery(): string {
        return this._filterQuery;
    }

    public set filterQuery(value: string) {
        this._filterQuery = value;
    }
}
