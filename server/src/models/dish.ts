import { IDish } from './../types/dish';
import { model, Schema } from 'mongoose'

export const dishSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  }
}, { timestamps: true });

export default model<IDish>('Dish', dishSchema)