"use client"

import { useSession } from "next-auth/react";

const UserInfo = () => {
    const session = useSession()
    return (
        <div>
            <p>{JSON.stringify(session)}</p>
            user info
        </div>
    );
};

export default UserInfo;