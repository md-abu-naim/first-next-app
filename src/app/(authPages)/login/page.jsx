import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LoginButton from "@/app/Components/LoginButton";
import UserInfo from "@/app/Components/UserInfo";
import { getServerSession } from "next-auth";

const Login = () => {
    const session = getServerSession(authOptions)
    return (
        <div>
            <h1>Login Page</h1>
            {/* <button onClick={() => signIn()}>Login</button> */}
            <LoginButton />
            <UserInfo />
            <p>{JSON.stringify(session)}</p>
        </div>
    );
};

export default Login;