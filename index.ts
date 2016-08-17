import { Connection } from "mongoose";
import { WizeSchema } from "wize-schema";
import { createSchema, createHistorySchema } from "wize-mongoose-schema";

export class WizeMongooseModel {
    public model: any;
    public historyModel: any;
    constructor(public metadata: WizeSchema, connection: Connection) {
        this.model =  connection.model(this.metadata.name, createSchema(this.metadata));
        if(this.metadata.versioning) {
            this.historyModel = connection.model(`history_${this.metadata.name}`, createHistorySchema(this.metadata.name));
        }
    }
}