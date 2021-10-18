import { IPlannedDish } from './../types/plannedDish';
import { model, Schema } from 'mongoose'
import Dish from './../models/dish'

export const dishSchema: Schema = new Schema({
  plannedOn: {
    type: String,
    required: true,
    child : Dish
  }
}, { timestamps: true });

export default model<IPlannedDish>('PlannedDish', dishSchema);