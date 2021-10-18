"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDishes = void 0;
const plannedDish_1 = __importDefault(require("../../models/plannedDish"));
const getDishes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const plannedDishes = yield plannedDish_1.default.find({ plannedOn: req.params.date });
        res.status(200).json({ dish: plannedDishes });
    }
    catch (error) {
        throw error;
    }
});
exports.getDishes = getDishes;
//# sourceMappingURL=index.js.map