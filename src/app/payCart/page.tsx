"use client"

import { useSelector } from "react-redux";
import { RoorState } from "../store/store";

import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"


function Pay (){

    const totalPrice = useSelector((state: RoorState)=> state.cart.totalPrice);

    
    useEffect (()=> {
        AOS.init({
            duraction : 1000,
            once: true,
        })
    }, [])

    return(
        <div>
            <div data-aos="flip-down" className="box-pay">
                <h2 className="title-pay">Card Details</h2>
                <p className="text-pay">name on card :</p>
                <input placeholder="Name" type="text" className="input-pay" />
                <br />
                <p className="text-pay">Card Number</p>
                <input placeholder="1111 2222 3333 4444" type="text" className="input-pay" />
                <br />
                <p className="text-pay">Expiration date</p>
                <input placeholder="mm/yy" type="text" className="input-pay" />
                <p className="text-pay">CVV</p>
                <input placeholder="123" type="text" className="input-pay" />
                <br />
                <button className="btn-pay-card">pay : $ {totalPrice}</button>
            </div>
        </div>
    )
}

export default Pay;