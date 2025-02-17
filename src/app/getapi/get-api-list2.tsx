"use client"

import apiList2Foods from "../api/api-list2-foods"

import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"

function GetApliList2 (){

    useEffect (()=> {
        AOS.init({
            duraction : 1000,
            once: true,
        })
    }, [])

    return(
        <div>
            <header className="header-list2">
                <h1 className="title-list2">Try this delicious recipe to make your day</h1>
                <p className="text-header-list2">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </header>
            <div className="main-list2">
                {apiList2Foods.map((item)=>(
                    <div  data-aos="fade-up" className="list2" key={item.id}>
                        <img src={item.img} alt="" className="image-list2" />
                        <h3 className="text-list2">{item.text}</h3>
                        <div className="footer-list2">
                            <img className="logo-timer-footer-list" src="./logo/logo-list1/Timer.png"></img>
                            <h5 className="text-timer-list2">{item.time}</h5>
                            <img className="logo-knife-footer-list" src="./logo/logo-list1/ForkKnife.png"></img>
                            <h5 className="text-knife-list2">{item.name}</h5>
                        </div>
                    </div>
                ))}
            </div>
            <footer className="footer-main-list2">
                <div className="box-footer">
                    <h1 className="title-footer">Deliciousness to your inbox</h1>
                    <p className="textfooter">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    <input type="text" className="input-footer" placeholder="Your email address..."></input>
                    <button className="btn-footer">Subscribe</button>
                </div>
                <div className="end-footer">
                <img src="./logo/Foodielandnav.png" alt="" className="logo-end-footer" />
                    <div className="header-endFooter">
                        <p className="text-header-end-footer">Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
                        <div className="box-btn-end-footer">
                            <p className="btn-end-footer">Recipes</p>
                            <p className="btn-end-footer">Blog</p>
                            <p className="btn-end-footer">Contact</p>
                            <p className="btn-end-footer">About us</p>
                        </div>
                    </div>
                    <div className="footer-endFooter">
                        <h4 className="text-end-footer">© 2020 Flowbase. Powered by Webflow</h4>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default GetApliList2;