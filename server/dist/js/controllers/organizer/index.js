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
exports.addPlannedDish = exports.getPlannedDishes = void 0;
const plannedDish_1 = __importDefault(require("../../models/plannedDish"));
const getPlannedDishes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const x = req.query.date;
        const plannedDishes = yield plannedDish_1.default.find({ plannedOn: x });
        res.status(200).json({ dishes: plannedDishes });
    }
    catch (error) {
        throw error;
    }
});
exports.getPlannedDishes = getPlannedDishes;
const addPlannedDish = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const plannedDish = new plannedDish_1.default({
            name: body.name,
            plannedOn: body.plannedOn,
            // description: body.description,
            // status: body.status,
        });
        const newDish = yield plannedDish.save();
        const allDishes = yield plannedDish_1.default.find({ plannedOn: body.plannedOn });
        res.status(201).json({ message: 'Dish added', dish: newDish, dishes: allDishes });
    }
    catch (error) {
        throw error;
    }
});
exports.addPlannedDish = addPlannedDish;
//# sourceMappingURL=index.js.map