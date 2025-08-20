import LoginButton from "@/app/Components/LoginButton";
import UserInfo from "@/app/Components/UserInfo";


const Login = () => {
    return (
        <div>
            <h1>Login Page</h1>
            {/* <button onClick={() => signIn()}>Login</button> */}
            <LoginButton />
            <UserInfo />
        </div>
    );
};

export default Login;