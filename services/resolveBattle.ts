import findStarCount from './findStarCount.js'
import buildHistory from './buildHistory.js'

export default function resolveBattle(firstUser:string,secondUser:string):object{
    
    const firstCount:number =findStarCount(firstUser)
    const secondCount:number =findStarCount(secondUser)
    let winner:string = null
    let loser:string = null
    let draw:boolean = false

    if(firstCount>secondCount){
        winner=firstUser
        loser=secondUser
        buildHistory(firstUser,'wins')
        buildHistory(secondUser,'losses')
    }
    else if(secondCount>firstCount){
        winner=secondUser
        loser=firstUser
        buildHistory(secondUser,'wins')
        buildHistory(firstUser,'losses')
    }
    else if(firstCount===secondCount){
        draw=true
        buildHistory(firstUser,'draws')
        buildHistory(secondUser,'draws')
    }

    return {winner,loser,draw}
}