import { ConnectDB } from "@/app/_assets/db/ConnectDB"
import { products } from "@/app/_assets/db/Schema"
import { NextResponse } from "next/server"

export const GET=async()=>{
    try {
        await ConnectDB()
        const data=await products.find();
        return NextResponse.json({msg:'hello',data})
    } catch (error) {
        return NextResponse.json({msg:'an error occured'})
    }
}