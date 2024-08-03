import { NextRequest, NextResponse } from "next/server";
import jwt  from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";
import { ConnectDB } from "@/app/_assets/db/ConnectDB";
import { user } from "@/app/_assets/db/Schema";
import { verify } from "crypto";
export const GET=async(req:NextRequest)=>{
    try {
        const token=req.headers.get('auth')
        console.log(token);
        if(!token){
            return NextResponse.json('you dont have token')
        }
        const verified=jwt.verify(token,'khushboo') as JwtPayload;
        if(!verified){
            return NextResponse.json(`you can't verify because your token is old`)
        }
        const email= verified.email;
        await ConnectDB()
        const result =await user.updateOne(
            {email:email},
            {$set:{verified:true}}
        )
        return NextResponse.json('you are verified')
    } catch (error) {
        return NextResponse.json('error')
    }
}
