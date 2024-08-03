import { ConnectDB } from "@/app/_assets/db/ConnectDB";
import { log } from "console";
import bcrypt from 'bcrypt';
import {user} from '@/app/_assets/db/Schema'; // Ensure the path to your User model is correct
import { NextRequest, NextResponse } from "next/server";
import  jwt from "jsonwebtoken";
import { transporter } from "@/app/emailConfig";
export const POST = async (req: NextRequest, res: NextResponse) => {
    try {
        const { name, email, password, phone, age } = await req.json();
        await ConnectDB();
        const hashedPassword = await bcrypt.hash(password, 10);
        log(name, email, hashedPassword, phone, age);
        const newUser = await user.create({
            name,
            email,
            password: hashedPassword,
            phone,
            age
        });
        const token=jwt.sign({email},'khushboo',{expiresIn:'1hr'})
        const vLink=`http://localhost:3000/verify?token=${token}`
        await transporter.sendMail({
            from:'kartikeymishracsjm@gmail.com',
            to:email,
            subject:'verification email',
            html:`<p>Click here to verify email <a href='${vLink}'>Link</a></p>`
        })

        return NextResponse.json({ msg: 'success' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ msg: 'error' });
    }
};
