'use client'
import axios from 'axios';
import React, { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [msg, setMsg] = useState('');
    const registerUser = async () => {
        const res = await axios.post('api/register', {
            name, age, phone, email, password
        });
        const response = res.data;
        console.log(response);
        setMsg(response.msg)
    }

    const seePassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className='w-[100%] h-[500px] border flex 
    flex-col items-center justify-center shadow-lg'>
            <input
                placeholder='Name'
                className='m-2 h-[50px] p-2 border w-[80%]'
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                placeholder='Email'
                className='m-5 p-2 border h-[50px] w-[80%]'
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
            <input
                placeholder='Age'
                className='m-2 p-2 h-[50px] border w-[80%]'
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <input
                placeholder='Phone Number'
                className='m-2 p-2 h-[50px] border w-[80%]'
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button className='m-5 h-[50px] p-2 border w-[150px]' onClick={registerUser}>
                Register
            </button>
            <p>{msg}</p>
        </div>
    )
}

export default Register;
