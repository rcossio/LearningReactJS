import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const UserData = ({errorMessages,handler}) => {

    let {cart} = useContext(CartContext)

    return(
        <div className="form-container">
            <div className="form-title">Full Name:</div>
            {errorMessages.name && (<p className="warning-text">{errorMessages.name}</p>)}
            <input onBlur={handler.name} type={"text"} className="form-input" placeholder="Name"></input>

            <div className="form-title">Telephone:</div>
            {errorMessages.phone && (<p className="warning-text">{errorMessages.phone}</p>)}
            <input onBlur={handler.phone} type={"number"} className="form-input" placeholder="Phone"></input>

            <div className="form-title">e-mail</div>
            {errorMessages.email && (<p className="warning-text">{errorMessages.email}</p>)}
            <input onBlur={handler.email} type={"email"} className="form-input" placeholder="its-a-me@sample.com"></input>

            <div className="form-title">Write your e-mail again</div>
            {errorMessages.email && (<p className="warning-text">{errorMessages.email}</p>)}
            <input onBlur={handler.email2} type={"email"} className="form-input" placeholder="its-a-me@sample.com"></input>

            {(cart.length === 0)
            ? <div className="strinking-text">The cart is empty! Load some products to make an order.</div>
            : <button className="striking-button" onClick={handler.order}>Order!</button>}
        </div>
    )
}

export default UserData;
