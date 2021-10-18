"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dish_1 = require("./dish");
const daySchema = new mongoose_1.Schema({
    date: {
        type: Date,
        required: true
    },
    dishes: {
        dishes: [dish_1.dishSchema],
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('Day', daySchema);
//# sourceMappingURL=day.js.map