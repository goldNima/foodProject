"use client"

import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../store/cartSlice"
import { RoorState } from "../store/store"

import Link from "next/link"

const Cart = ()=>{
    const cart = useSelector((state: RoorState)=> state.cart)
    const totalPrice = useSelector((state: RoorState)=> state.cart.totalPrice)
    const dispatch = useDispatch();

    return(
        <div className="cart">
            <header className="header-cart">
                <h1 className="title-cart">Cart <img src="./logo/logo-cart/icons8-cart-30.png" alt="" className="logo-cart" /></h1>
            </header>
            {cart.cart.map((item)=>(
                <div className="container-cart" key={item.id}>
                    <div className="box-items-cart">
                        <img src={item.image} alt="" className="image-cart" />
                        <h3 className="name-cart">name : {item.name}</h3>
                        <h4 className="price-cart">price : {item.price} $</h4>
                        <img onClick={()=> dispatch(removeFromCart(item.id))} className="icon-trash-cart" src="./logo/logo-cart/Trash Can.png" alt="" />
                    </div>
                </div>
            ))}
            <h3 className="total-cart">totalPrice : {totalPrice} $</h3>
            <Link href="/payCart"><button className="btn-pay">continue for pay</button></Link>
        </div>
    )
}

export default Cart;