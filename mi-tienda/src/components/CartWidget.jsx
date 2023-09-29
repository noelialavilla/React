import React from "react";
import cartImg from "../assets/cart2.svg"
const CartWidget = () => {
    return (
        <a className="nav-link flex col-4" href=""><img className='carrito' src={cartImg} alt="Carrito"/>15</a>
    )
}


export default CartWidget;