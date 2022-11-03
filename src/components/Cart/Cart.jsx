import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

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
                ? <div className="centered-div"> 
                    <p className="empty-cart-message">Hey! This is your cart. Ready to fill this list?</p>
                    </div>
                : <div className="centered-div">
                    <Link to='/checkout'>
                        <button className="buy-button"> Purchase Items </button>
                    </Link>
                    <button onClick={clear} className="cart--clear-btn">Clear Cart</button>                
                </div>
            }
            <div className="centered-div">
                <div className="little-message">
                    <p>Still hungry for apples?</p>
                </div>
                <Link to='/'>
                    <button className="item--button"> Find more products </button>
                </Link>
            </div>
        </div>
    )
}

export default Cart