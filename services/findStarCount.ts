import axios, { AxiosPromise } from 'axios'
export default function findStarCount(username:string){

    let starCount : number = 0

    const promise:AxiosPromise=axios.get(`https://api.github.com/users/FelipeMejias/repos`)

    promise.then(res=>{
        starCount =res.data[0]?.stargazers_count
    })

    promise.catch(err=>{
        console.log(err)
    })
    
    return starCount
}