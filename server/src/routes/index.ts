import { Router } from 'express'
import { getTodos, addTodo, updateTodo, deleteTodo } from '../controllers/todos'
import {getPlannedDishes, addPlannedDish} from '../controllers/organizer'

const router: Router = Router()

router.get('/todos', getTodos)
router.post('/add-todo', addTodo)
router.put('/edit-todo/:id', updateTodo)
router.delete('/delete-todo/:id', deleteTodo)

router.get('/get-planned-dishes', getPlannedDishes)
router.post('/add-planned-dish', addPlannedDish)

export default router
