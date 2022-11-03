import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import cartImg from "./cartImg.svg";

const CartWidget = () => {

    let {cart} = useContext(CartContext)

    return(
        <picture className="cartwidget-container">
            <img className={"cartwidget-img"} src={cartImg} alt={"CartWidget"}/>
            { !(cart.length === 0) && 
            <div className="cartwidget-counter-container">
                <span className="cartwidget-counter"> {cart.reduce((ac,it) => ac + it.quantity,0) }</span>
            </div>
            }
        </picture>
    )
}

export default CartWidget