'use client'

import { signIn } from "next-auth/react"
const LoginButton = () => {
    return (
        <div>
            <button className="btn" onClick={() => signIn()}>Login</button>
        </div>
    );
};

export default LoginButton;