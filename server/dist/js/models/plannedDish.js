"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dishSchema = void 0;
const mongoose_1 = require("mongoose");
exports.dishSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    plannedOn: {
        type: String,
        required: true,
    }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('PlannedDish', exports.dishSchema);
//# sourceMappingURL=plannedDish.js.map