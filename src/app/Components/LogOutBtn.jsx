'use client'
import { signOut } from 'next-auth/react';
import React from 'react';

const LogOutBtn = () => {
    return (
        <div>
            <button onClick={() => signOut()} className='btn'>LogOUt</button>
        </div>
    );
};

export default LogOutBtn;