"use client"
import Link from "next/link";

function NavBar (){

    const scrollToBlog = ()=>{
        window.scrollTo({top: 3300 , behavior: 'smooth'})
    }
    const scrollToAbautUs = ()=>{
        window.scrollTo({top: 4300 , behavior: 'smooth'})
    }

    return(
        <div className="navbar">
            <div className="navBar-Container">
                <div className="left-nav">
                    <img className="logo-nav" src="./logo/Foodielandnav.png" alt="logo" />
                </div>
                <div className="main-nav">
                    <Link style={{textDecoration : 'none'}} href="/"><p className="btn-nav">Home</p></Link>
                    <Link style={{textDecoration : 'none'}} href="/login"><p className="btn-nav">Log In</p></Link>
                    <p onClick={scrollToBlog} className="btn-nav">Blog</p>
                    <p onClick={scrollToAbautUs} className="btn-nav">About us</p>
                    <Link style={{textDecoration : 'none'}} href="/shop"><p className="btn-nav">Shop</p></Link>
                </div>
                <div className="right-nav">
                    <img src="./logo/001-facebook.png" alt="logo" className="logo-btn-right-nav" />
                    <img src="./logo/003-twitter.png" alt="logo" className="logo-btn-right-nav" />
                    <img src="./logo/004-instagram.png" alt="logo" className="logo-btn-right-nav" />
                </div>
            </div>
            
        </div>
    )
}


export default NavBar;