import { IPlannedDish } from './../types/plannedDish';
import { model, Schema } from 'mongoose'
import Dish from './../models/dish'

export const dishSchema: Schema = new Schema({
  name : {
    type : String,
    required: true
  },
  plannedOn: {
    type: String,
    required: true,
  }
}, { timestamps: true });

export default model<IPlannedDish>('PlannedDish', dishSchema);