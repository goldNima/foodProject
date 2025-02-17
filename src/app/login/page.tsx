"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

function logIN (){

    const [name , setName] = useState<string>('');
    const [lastName , setLastName] = useState<string>('');
    const [email , setEmail] = useState<string>('');
    const [password , setPassword] = useState<string>('');

    const [error , setError] = useState<string | null>(null);
    const router = useRouter();


    const handleLog = (e: React.FormEvent)=>{
        e.preventDefault();


        if (!name || !lastName || !email || !password){
            setError("please fill all the inputs ...");
            return;
        }

        const emailRegax = /^[6\s@]+@[^\s@]+\.[^s@]+\.[^s@]+$/;
        if (!emailRegax.test(email)){
            return;
        }




        setError(null)

        alert("information saved correctly")
    }

    const handleBTNLog = ()=>{

        localStorage.setItem("name" , name);
        localStorage.setItem("Lastname" , lastName);
        localStorage.setItem("email" , email);
        localStorage.setItem("password" , password);

        const namePanel = "Nima"
        const lastNamePanel = "TJN"
        const emailPanl = "tjN@gmail.com"
        const passwordPanel = "NtNt80"

        
        if (name === namePanel && lastName === lastNamePanel && email === emailPanl && password === passwordPanel){
            router.push("/panelAdmin")
        }else{
            router.push("/dashboard")
        }
    }

    return (
        <div className="container-logIn">
            <div className="left-LogIn">
                <img src="./images/image-logIn.png" alt="" className="image-logIN" />
            </div>
            <div className="right-LigIn">
                <form onSubmit={handleLog}>
                    <h1 className="title-logIn">Log In</h1>
                    <p className="text-logIn">Welcome back Please <br /> Enter Your Details.</p>
                    <br />
                    <h4 className="text-inputs">Name</h4>
                    <input onChange={((e)=> setName(e.target.value))} type="text" className="input-logIn" placeholder="Enter your Name :" />
                    <br />
                    <h4 className="text-inputs">LastName</h4>
                    <input onChange={((e)=> setLastName(e.target.value))} type="text" className="input-logIn" placeholder="Enter your LastName :" />
                    <br />
                    <h4 className="text-inputs">Email</h4>
                    <input onChange={((e)=> setEmail(e.target.value))} type="email" className="input-logIn" placeholder="Enter your Email :" />
                    <br />
                    <h4 className="text-inputs">Password</h4>
                    <input onChange={((e)=> setPassword(e.target.value))} type="password" className="input-logIn" placeholder="Enter your Password :" />
                    <br />
                    <div className="checkbox">
                        <input type="checkbox" className="input-chkBox" />
                        <p className="text-checkBox">I agree with all terms&policy</p>
                    </div>
                    {error && <p style={{color: "red", fontWeight: "bolder" , textAlign: "center"}}>{error}</p>}
                    <button onClick={handleBTNLog} type="submit" className="btn-log-in">Log IN</button>
                </form>
            </div>
        </div>
    )
}

export default logIN;