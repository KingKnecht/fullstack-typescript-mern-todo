"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
const organizer_1 = require("../controllers/organizer");
const router = (0, express_1.Router)();
router.get('/todos', todos_1.getTodos);
router.post('/add-todo', todos_1.addTodo);
router.put('/edit-todo/:id', todos_1.updateTodo);
router.delete('/delete-todo/:id', todos_1.deleteTodo);
router.get('/get-planned-dishes', organizer_1.getPlannedDishes);
router.post('/add-planned-dish', organizer_1.addPlannedDish);
exports.default = router;
//# sourceMappingURL=index.js.map