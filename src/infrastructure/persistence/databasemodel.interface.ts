import { IDatabase } from "./database.interface";

export interface IDatabaseModel extends IDatabase {
    createModel(name: string, properties: any): any,
    listID(type: any, dataId: number, includes?: object): any,
    list(type: any, includes?: object): any,
    update(type: any, properties: any): any,
    listAllByWhere(type: any, properties: any): any,
    listOneByWhere(type: any, properties: any): any
}