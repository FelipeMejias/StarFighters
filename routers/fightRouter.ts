import Router from 'express'
import { getRanking, makeFight } from '../controllers/fightControllers.js'

const fightRouter = Router()

fightRouter.post( "/battle" , makeFight )

fightRouter.get( "/ranking" , getRanking )

export default fightRouter