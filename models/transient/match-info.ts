import { TransientBaseModel } from './base/transient-base-model';
import { Party } from './party';

export class MatchInfo extends TransientBaseModel {
    public static CLASSNAME = 'MatchInfo';

    private _host: string;
    private _port: string;
    private _team1: Array<Party>;
    private _team2: Array<Party>;
    private _secrets: {};

    constructor() {
        super(MatchInfo.CLASSNAME);
        this.team1 = new Array();
        this.team2 = new Array();
        this.secrets = {};
    }

    /**
     * Getter host
     * @return {string}
     */
    public get host(): string {
        return this._host;
    }

    /**
     * Getter port
     * @return {string}
     */
    public get port(): string {
        return this._port;
    }

    /**
     * Getter team1
     * @return {Array<Party>}
     */
    public get team1(): Array<Party> {
        return this._team1;
    }

    /**
     * Getter team2
     * @return {Array<Party>}
     */
    public get team2(): Array<Party> {
        return this._team2;
    }

    /**
     * Setter host
     * @param {string} value
     */
    public set host(value: string) {
        this._host = value;
    }

    /**
     * Setter port
     * @param {string} value
     */
    public set port(value: string) {
        this._port = value;
    }

    /**
     * Setter team1
     * @param {Array<Party>} value
     */
    public set team1(value: Array<Party>) {
        this._team1 = value;
    }

    /**
     * Setter team2
     * @param {Array<Party>} value
     */
    public set team2(value: Array<Party>) {
        this._team2 = value;
    }

    /**
     * Getter secrets
     * @return {{}}
     */
    public get secrets(): {} {
        return this._secrets;
    }

    /**
     * Setter secrets
     * @param {{}} value
     */
    public set secrets(value: {}) {
        this._secrets = value;
    }


}
TransientBaseModel.registerClass(MatchInfo, MatchInfo.CLASSNAME);
