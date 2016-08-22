import { Connection, Model, Document } from "mongoose";
import { WizeSchema } from "wize-schema";
export declare class WizeMongooseModel {
    metadata: WizeSchema;
    model: Model<Document>;
    historyModel: Model<Document>;
    constructor(metadata: WizeSchema, connection: Connection);
}
