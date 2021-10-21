import { Response, Request } from 'express'
import { IPlannedDish } from '../../types/plannedDish'
import PlannedDish from '../../models/plannedDish'


const getPlannedDishes = async (req: Request, res: Response): Promise<void> => {
    try {
        const plannedOn  = req.query.date as string;
        const plannedDishes: IPlannedDish[] = await PlannedDish.find({ plannedOn: plannedOn })
        res.status(200).json({ dishes: plannedDishes })
    } catch (error) {
        throw error
    }
}

const addPlannedDish = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<IPlannedDish, 'name' | 'plannedOn'>

        const plannedDish: IPlannedDish = new PlannedDish({
            name: body.name,
            plannedOn: body.plannedOn,
            // description: body.description,
            // status: body.status,
        })

        const newDish: IPlannedDish = await plannedDish.save()
        const allDishes: IPlannedDish[] = await PlannedDish.find({ plannedOn: body.plannedOn })

        res.status(201).json({ message: 'Dish added', dish: newDish, dishes: allDishes })
    } catch (error) {
        throw error
    }
}

export { getPlannedDishes, addPlannedDish }