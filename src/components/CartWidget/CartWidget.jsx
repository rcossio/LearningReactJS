import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import cartImg from "./cartImg.svg";

const CartWidget = () => {

    let {cart} = useContext(CartContext)

    return(
        <picture className="cart-container">
            <img className={"cart"} src={cartImg} alt={"CartWidget"}/>
            { !(cart.length === 0) && 
            <div className="counter-container">
                <span className="counter"> {cart.reduce((ac,it) => ac + it.quantity,0) }</span>
            </div>
            }
        </picture>
    )
}

export default CartWidget