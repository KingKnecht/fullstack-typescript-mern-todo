import { Document } from 'mongoose'

export interface IDish extends Document {
    name : string
    description: string
    status: boolean
}

