import "../../index.css";
import cart from "./cart.svg";

const CartWidget = () => {
    return(
        <picture className="cart-container">
            <img className={"cart"} src={cart} alt={"CartWidget"}/>
            <div className="counter-container">
                <span className="counter">3</span>
            </div>
        </picture>
    )
}

export default CartWidget