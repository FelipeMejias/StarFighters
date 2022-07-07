
import {Request, Response} from 'express'
import { QueryArrayResult } from 'pg'
import { fightersRepository } from '../repositories/fightersRepository.js'
import resolveBattle from '../services/resolveBattle.js'

export async function makeFight(req:Request,res:Response){
    const {firstUser,secondUser}  = req.params

    const fightResult : object = resolveBattle(firstUser,secondUser)
    res.send(fightResult)
}

export async function getRanking(req:Request,res:Response){

    const rankingResult:QueryArrayResult = await fightersRepository.selectRanking()
    res.send({fighters:rankingResult.rows})
}