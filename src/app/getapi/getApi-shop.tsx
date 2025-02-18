"use client"

import { ApiShop , ShopINT } from "../api/api-shop"
import { useDispatch, UseDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import Link from "next/link";


export const GetApiShop = ()=>{

    const dispatch = useDispatch();

    const handleAddToCart = (product: ShopINT)=>{
        dispatch(addToCart(product))
    }

    return(
        <div>
            <div className="container-shop">
                {ApiShop.map((product)=>(
                    <div className="items-container" key={product.id}>
                        <img src={product.image} alt="" className="item-image" />
                        <h3 className="name-items">{product.name}</h3>
                        <p className="price-item">{product.price} $</p>
                        <Link href="/cart"><button onClick={()=> handleAddToCart(product)} className="btn-shop">add to cart</button></Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

