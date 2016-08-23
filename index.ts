import { Connection, Model, Document } from "mongoose";
import { WizeSchema } from "wize-schema";
import { createSchema, createHistorySchema } from "wize-mongoose-schema";

export class WizeMongooseModel {
    model: Model<Document>;
    historyModel:  Model<Document>;
    certificationModel:  Model<Document>;
    private static models: WizeMongooseModel[]=  [];
    constructor(public metadata: WizeSchema, connection: Connection) {
        this.model =  connection.model(this.metadata.name, createSchema(this.metadata));
        if(this.metadata.versioning) {
            this.historyModel = connection.model(`history_${this.metadata.name}`, createHistorySchema(this.metadata.name));
        }
        if(this.metadata.certification) {
            this.certificationModel = connection.model(`certification_${this.metadata.name}`, createHistorySchema(this.metadata.name));
        }
        WizeMongooseModel.models.push(this);
    }
    get models() {
        return WizeMongooseModel.models;
    }
}