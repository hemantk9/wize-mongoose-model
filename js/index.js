"use strict";
const wize_mongoose_schema_1 = require("wize-mongoose-schema");
class WizeMongooseModel {
    constructor(metadata, connection) {
        this.metadata = metadata;
        this.model = connection.model(this.metadata.name, wize_mongoose_schema_1.createSchema(this.metadata));
        if (this.metadata.versioning) {
            this.historyModel = connection.model(`history_${this.metadata.name}`, wize_mongoose_schema_1.createHistorySchema(this.metadata.name));
        }
        if (this.metadata.certification) {
            this.certificationModel = connection.model(`certification_${this.metadata.name}`, wize_mongoose_schema_1.createHistorySchema(this.metadata.name));
        }
    }
}
exports.WizeMongooseModel = WizeMongooseModel;
//# sourceMappingURL=index.js.map