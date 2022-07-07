import express, { json } from 'express'
import cors from 'cors'

import dotenv from 'dotenv'
dotenv.config()

import { handleError } from './middlewares/handleError.js'
import fightRouter from './routers/fightRouter.js'

const app=express()
app.use(cors())
app.use(json())

app.use(fightRouter)
app.use(handleError)

const port : number = +process.env.PORT || 5000
app.listen(port,()=>console.log(`server up un port ${port}`))