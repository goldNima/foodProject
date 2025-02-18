"use client"

import { apiList1Foods } from "../api/api-list1-foods"

function GetApiList1 (){


    return(
        <div>
            <div className="header-get-api-list1">
                <h1 className="title-list1">Simple and tasty recipes</h1>
                <p className="text-header-list1">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
            <div  className="container-get-api-list1">
                    {apiList1Foods.map((item)=>(
                        <div className="list1" key={item.id}>
                            <img src={item.img} alt="" className="image-list1" />
                            <h3 className="text-list1">{item.text}</h3>
                            <div className="footer-list1">
                                <img className="logo-timer-footer-list" src="./logo/logo-list1/Timer.png"></img>
                                <h5 className="text-timer-list1">{item.time}</h5>
                                <img className="logo-knife-footer-list" src="./logo/logo-list1/ForkKnife.png"></img>
                                <h5 className="text-knife-list1">{item.name}</h5>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="footer-list1">
                <div className="left-footer-list1">
                    <h1 className="title-footer-list1">Everyone can be achef in their own kitchen</h1>
                    <p className="text-footer-list1">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    <button className="btn-list1">Learn More</button>
                </div>
                <div className="right-footer-list1">
                    <img src="./images/image-list1/imagefooter.png" alt="" className="image-footer-list1" />
                </div>
            </div>
        </div>
    )
}

export default GetApiList1;
