import "./cartwidget.css";
import cart from "./cart.svg";

const CartWidget = () => {
    return(
        <picture className="cart-div">
            <img className={"cart"} src={cart} alt={"CartWidget"}/>
            <span className="counter">3</span>
        </picture>
    )
}

export default CartWidget