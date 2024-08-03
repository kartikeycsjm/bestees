'use client'
import axios from 'axios';
import React, { useState, useRef } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [msg, setMsg] = useState('');
    const login = async () => {
        const res = await axios.post('api/login', {
            email, password
        });
        const response = res.data;
        console.log(response);
        setMsg(response.msg)
    }

    const seePassword = () => {
        setShowPassword(!showPassword);
    }
    return (
        <div className='w-[100%] h-[400px] border flex 
    flex-col items-center justify-center shadow-lg'>
            <input 
                placeholder='Email'
                className='m-5 p-2 border w-[80%]'
                type="text" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <div className='w-[80%] border h-[52px]'>
                <input 
                    placeholder='Password'
                    className='p-2 h-[50px] w-[90%]'
                    type={showPassword ? "text" : "password"} 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='w-[10%]' onClick={seePassword}>
                    {showPassword ? "🙈" : "👀"}
                </button>
            </div>
            <button className='m-5 p-2 border w-[150px]' onClick={login}>
                Login
            </button>
            <p>{msg}</p>
        </div>
    )
}
export default Login;
