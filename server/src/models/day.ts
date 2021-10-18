import { IDay } from './../types/day';
import { model, Schema } from 'mongoose'
import { dishSchema } from './dish';

const daySchema: Schema = new Schema({
  date: {
    type: Date,
    required: true
  },
  dishes: {
    dishes: [dishSchema],
    required: true
  },
  status: {
    type: Boolean,
    required: true
  }

}, { timestamps: true })


export default model<IDay>('Day', daySchema)