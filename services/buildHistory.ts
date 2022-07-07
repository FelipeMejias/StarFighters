import { QueryArrayResult } from "pg";
import { fightersRepository } from "../repositories/fightersRepository.js";
export default async function buildHistory(username:string,result:string){

    const fighter:QueryArrayResult=await fightersRepository.selectFighter(username)
    
    if(!fighter.rows[0]){
        await fightersRepository.insertNewFighter(username)
        await fightersRepository.updateFighterHistory(username,result,1)
    }
    else{
        const specificCount : number = fighter.rows[0][result]
        await fightersRepository.updateFighterHistory(username,result,specificCount+1)
    }
}