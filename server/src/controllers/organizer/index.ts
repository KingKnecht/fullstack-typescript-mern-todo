import { Response, Request } from 'express'
import {IPlannedDish} from '../../types/plannedDish'
import PlannedDish from '../../models/plannedDish'

const getDishes = async (req: Request, res: Response): Promise<void> => {
  try {
      const plannedDishes: IPlannedDish[] = await PlannedDish.find({plannedOn : req.params.date})
      res.status(200).json({ dish: plannedDishes })
  } catch (error) {
      throw error
  }
}

export { getDishes }