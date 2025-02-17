"use client"

import { ApiShop , ShopINT } from "../api/api-shop"
import { useDispatch, UseDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import Link from "next/link";

import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"

export const GetApiShop = ()=>{

    const dispatch = useDispatch();

    const handleAddToCart = (product: ShopINT)=>{
        dispatch(addToCart(product))
    }

    useEffect (()=> {
        AOS.init({
            duraction : 1000,
            once: true,
        })
    }, [])

    return(
        <div>
            <div className="container-shop">
                {ApiShop.map((product)=>(
                    <div data-aos="zoom-in" className="items-container" key={product.id}>
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

