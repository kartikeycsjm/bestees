import { NextRequest, NextResponse } from "next/server";
import jwt  from "jsonwebtoken";
import { ConnectDB } from "@/app/_assets/db/ConnectDB";
import { user } from "@/app/_assets/db/Schema";
export const GET=async(req:NextRequest)=>{
    try {
        const token=req.headers.get('auth')
        console.log(token);
        if(!token){
            return NextResponse.json('you dont have token')
        }
        const verified=jwt.verify(token,'khushboo')
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
