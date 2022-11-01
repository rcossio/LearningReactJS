import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

const Cart = () => {

    const {cart,removeItem,clear} = useContext (CartContext)

    return (
        <div className="cart">
            <div className="cart-row cart-header">
                <p className="cart-row--cell"> ID </p>
                <p className="cart-row--cell-lg"> Titulo </p>
                <p className="cart-row--cell-sm"> Precio</p>
                <p className="cart-row--cell-sm"> Cantidad</p>
            </div>
            {cart.map( (item) => {
                return (
                    <div key={item.id} className="cart-row">
                            <p className="cart-row--cell"> {item.id} </p>
                            <p className="cart-row--cell-lg"> {item.title} </p>
                            <p className="cart-row--cell-sm">${item.price}</p>
                            <p className="cart-row--cell-sm">{item.quantity? item.quantity:0}</p>
                            <button onClick={() => {removeItem(item)}} className="cart-row--remove-btn">X</button>                
                    </div>
                )
            })}
            {
                cart.length === 0
                ? null
                : <div>
                    <button onClick={clear} className="cart--clear-btn">Clear Cart</button>                
                </div>
            }

        </div>
    )
}

export default Cart