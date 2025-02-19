"use client"

import Link from "next/link"
import { useEffect , useState } from "react"

function dashboard (){

    const [name , setName] = useState<string | null>(null);
    const [lastName , setLastName] = useState<string | null>(null);
    const [email , setEmail] = useState<string | null>(null);
    const [password , setPassword] = useState<string | null>(null);

     useEffect(()=>{
        setName(localStorage.getItem("name"));
        setLastName(localStorage.getItem("Lastname"));
        setEmail(localStorage.getItem("email"));
        setPassword(localStorage.getItem("password"))
     })

    return(
        <div>
            <header className="header-dashboard">
                <h1 className="title-dashboard">Dashboard</h1>
            </header>
            <div className="container-dashboard">
                <div className="left-dashboard">
                    <img src="./logo/logo-dashboard/icons8-male-user-64.png" alt="logo" className="btn-left-dashboard" />
                    <br />
                    <img src="./logo/logo-dashboard/icons8-dashboard-64.png" alt="logo" className="btn-left-dashboard" />
                    <br />
                    <img src="./logo/logo-dashboard/icons8-bar-chart-64.png" alt="logo" className="btn-left-dashboard" />
                    <br />
                    <Link href="/"><img src="./logo/logo-dashboard/icons8-home-50.png" alt="logo" className="btn-left-dashboard" /></Link>
                    <br />
                    <Link href="/login"><button className="last-btn-left-dashboard">Log out</button></Link>
                </div>
                <div className="right-dashboard">
                    <header className="header-right-dashboard">
                        <img src="./logo/logo-dashboard/icons8-male-user-64.png" alt="" className="logo-header-right-dashboard" />
                        <h2 className="title-right-dashboard">Your Profile</h2>
                    </header>
                    <h3 className="text-right-dashboard">Your Name : <span className="span-text-right-dashboard">{name}</span></h3>
                    <h3 className="text-right-dashboard">Your LastName : <span className="span-text-right-dashboard">{lastName}</span></h3>
                    <h3 className="text-right-dashboard">Your Email : <span className="span-text-right-dashboard">{email}</span></h3>
                    <h3 className="text-right-dashboard">Your Password : <span className="span-text-right-dashboard">{password}</span></h3>
                </div>
            </div>
        </div>
    )
}

export default dashboard;
