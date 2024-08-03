import { ConnectDB } from "@/app/_assets/db/ConnectDB";
import bcrypt from 'bcrypt';
import {user} from '@/app/_assets/db/Schema';
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
    try {
        const { email, password } = await req.json();
        await ConnectDB();
        const nuser = await user.findOne({ email });

        if (!nuser) {
            return NextResponse.json({ msg: 'Invalid email or password' });
        }
        const isPasswordMatch = await bcrypt.compare(password, nuser.password);
        if (!isPasswordMatch) {
            return NextResponse.json({ msg: 'Invalid email or password' });
        }
        const verified=nuser.verified;
        if(!verified){
            return NextResponse.json({ msg: 'you are not verified' });
        }
        return NextResponse.json({ msg: 'Login successful' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ msg: 'Error logging in' });
    }
};
