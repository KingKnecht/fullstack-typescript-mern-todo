import { Document } from 'mongoose'
import { IDish } from './dish';

export interface IDay extends Document {
    date: Date
    dishes: IDish[]
}