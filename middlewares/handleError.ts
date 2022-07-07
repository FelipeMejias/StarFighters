import { NextFunction, Request, Response } from "express";

export async function handleError(error:any,req:Request,res:Response,next:NextFunction) {
    console.log(error)
    res.sendStatus(500)
}