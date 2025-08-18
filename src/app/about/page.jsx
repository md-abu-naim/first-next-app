"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () => {
    const router = useRouter()
    const isLogin = false
    
    const handleNavigate = () => {
        if(isLogin) return router.push('/about/address')
        else return router.push('/')
    }
    // throw error("This is an error from about page");
    return (
        <div>
            <h1 className="text-2xl">This is about page</h1>
            <p className="mt-4 text-lg">Here you can find information about our application.</p>
            <ul className="flex gap-1">
                <p>navigate by Link</p><br />
                <li className="btn"><Link href='/about/address'>Address</Link></li>
<br />
                <p>Navigate by useRouter hook</p><br />
                <button className="btn" onClick={handleNavigate}>Address</button>
            </ul>
        </div>
    );
};

export default About;