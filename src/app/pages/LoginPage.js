"use client";
import Link from "next/link";
import { useRouter } from 'next/compat/router';
import { useState,useEffect } from "react";

export default function LoginPage(){
    const [users,setUsers]=useState([]);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    
    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    };

    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
    };


    useEffect(() => {
        async function fetchUsers() {
          const res = await fetch("/Credentials/LoginInfo");
          const data = await res.json();
          setUsers(data);
        }
        fetchUsers();
    }, []);
    
    const router = useRouter();

    async function handleLogin(){
        const requiredUser=users.find((element)=>{
            return element.Email === email && element.Password === password;
        });

        if (requiredUser) {
            alert("Login successful");
            router.push("/HomePage");
        } else {
            alert("Invalid Email or Password.");
        }
    }

    return(
        <div className="bg-blue-300 p-10 text-center h-200 m-15">
            <div className="bg-white  text-center w-xl p-10 ml-60">
                <h1 className="text-5xl font-extrabold text-blue-800 m-3">Let's Tweet</h1>
                <div className="flex flex-row border-b border-blue-300 mt-20">
                    <p className="text-xl font-medium text-blue-600 m-2">Log in</p>
                    <p className="text-xl font-medium text-blue-600 m-2">Sign up</p>
                </div>
                <div className="flex flex-col">
                    <input type="Text"
                        value={email}
                        onChange={handleEmailChange}
                        className="text-xl border-1 h-10 border-blue-300 m-4" 
                        placeholder="Email">
                    </input>
                    <input type="Text" 
                        value={password}
                        onChange={handlePasswordChange}
                        className="text-xl border-1 h-10 border-blue-300 m-4"
                        placeholder="Password">
                    </input>
                </div>
                <button className="bg-blue-600 text-xl h-10 w-md m-4 border rounded-sm" onClick={handleLogin}>Log in</button>
                <Link href="/ForgotPasswordPage" className="text-xl text-blue-600 text-right ml-60">Forgot password?</Link>
                <div className="flex flex-row m-3">
                    <p className="text-xl text-gray-500 text-left mr-35">Don't have an account?</p> 
                    <Link href="/SignupPage" className="text-xl text-blue-600 text-right">Sign up</Link>
                </div>
            </div>
        </div>
    )
}