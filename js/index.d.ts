import { Connection } from "mongoose";
import { WizeSchema } from "wize-schema";
export declare class WizeMongooseModel {
    metadata: WizeSchema;
    model: any;
    historyModel: any;
    constructor(metadata: WizeSchema, connection: Connection);
}
