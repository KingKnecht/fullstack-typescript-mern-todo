import express, { Express } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import todoRoutes from './routes'



const app: Express = express()

const PORT: string | number = process.env.PORT || 4000
console.log("PORT: " + PORT);

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(todoRoutes)

//const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clustertodo.raz9g.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const uri: string = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@localhost/Todos?retryWrites=true&w=majority`

const options = {}
  
mongoose
    .connect(uri, options)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}`)
        )
    )
    .catch((error) => {
        throw error
    })
