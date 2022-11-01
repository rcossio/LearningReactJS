import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import cartImg from "./cartImg.svg";

const CartWidget = () => {

    let {cart} = useContext(CartContext)

    return(
        <picture className="cart-container">
            <img className={"cart"} src={cartImg} alt={"CartWidget"}/>
            <div className="counter-container">
                <span className="counter"> {cart.length}</span>
            </div>
        </picture>
    )
}

export default CartWidget