"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dishSchema = void 0;
const mongoose_1 = require("mongoose");
const dish_1 = __importDefault(require("./../models/dish"));
exports.dishSchema = new mongoose_1.Schema({
    plannedOn: {
        type: String,
        required: true,
        child: dish_1.default
    }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('PlannedDish', exports.dishSchema);
//# sourceMappingURL=plannedDish.js.map