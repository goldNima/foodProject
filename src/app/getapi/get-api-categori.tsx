"use client"

import Link from "next/link";

import { apiCategoris } from "../api/api-categoris"

function GetApiCategori (){
    return(
        <div>
            <div className="header-categori">
                <h1 className="title-categori">Categories</h1>
                <Link href="/categories"><button className="btn-categori">View All Categories</button></Link>
            </div>
            <div className="container-categori">
                {apiCategoris.map((item)=>(
                    <div className="container-items-categori" key={item.id}>
                        <img className="img-categori" src={item.img} alt="image" />
                        <h4 className="name-categori">{item.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GetApiCategori;