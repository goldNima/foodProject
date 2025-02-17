"use client"


import { apiCategoris2 } from "../api/api-Allcategories";

function GetApiCategori2 (){
    return(
        <div>
            <div className="container-categori2">
                {apiCategoris2.map((item)=>(
                    <div className="container-items-categori2" key={item.id}>
                        <img className="img-categori" src={item.img} alt="image" />
                        <h4 className="name-categori">{item.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GetApiCategori2;