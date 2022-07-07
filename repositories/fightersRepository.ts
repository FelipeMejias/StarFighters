import db from '../db.js'

async function insertNewFighter(username:string){
    db.query(`
        INSERT INTO fighters (username,wins,losses,draws)
        VALUES ($1,0,0,0);
    `,[username])
}

async function selectFighter(username:string){
    return db.query(`
        SELECT * FROM fighters
        WHERE username = $1 ;
    `,[username])
}

async function updateFighterHistory(username:string,result:string,count:number){
    db.query(`
        UPDATE fighters
        SET ${result} = ${count}
        WHERE username = $1 ;
    `,[username])
}

async function selectRanking() {
    return db.query(`
        SELECT username, wins, losses, draws FROM fighters
        ORDER BY wins DESC, draws DESC;
    `)
}

export const fightersRepository={
    insertNewFighter,
    selectFighter,
    updateFighterHistory,
    selectRanking
}