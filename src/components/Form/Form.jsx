import { useContext,useState } from "react";
import { CartContext } from "../../context/CartContext";

const Form = () => {

    let [name, setName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [checkNameErrors,setCheckNameErrors] = useState(false);
    let [checkLastNameErrors,setCheckLastNameErrors] = useState(false);
    let [checkEmailErrors,setCheckEmailErrors] = useState(false);

    let {cart} = useContext(CartContext)


    let handleName = (e) => {
        setName(e.target.value)
    }
    let clearNameErrors = () => {
        setCheckNameErrors(false)
    }


    let handleLastName = (e) => {
        setLastName(e.target.value)
    }
    let clearLastNameErrors = () => {
        setCheckLastNameErrors(false)
    }


    let handleEmail = (e) => {
        setEmail(e.target.value)
    }
    let clearEmailErrors = () => {
        setCheckEmailErrors(false)
    }

    
    let handleOrder = () => {
        (name.length === 0) && setCheckNameErrors(true);
        (lastName.length === 0) && setCheckLastNameErrors(true);
        (email.length === 0) && setCheckEmailErrors(true);
        (!email.includes('@')) && setCheckEmailErrors(true);

        console.log('Handling Order Click');
        console.log({name,lastName,email});
    };


    return (
        <div>
            <div className="checkout-form">
                <div className="checkout-title">Name:</div>
                {checkNameErrors && (<p className="errorMessage">Error here</p>)}
                <input onFocus={clearNameErrors} onBlur={handleName} type={"text"} className="checkout-input" placeholder="Name"></input>

                <div className="checkout-title">Last Name:</div>
                {checkLastNameErrors && (<p className="errorMessage">Error here</p>)}
                <input onFocus={clearLastNameErrors} onBlur={handleLastName} type={"text"} className="checkout-input" placeholder="Last Name"></input>

                <div className="checkout-title">e-mail</div>
                {checkEmailErrors && (<p className="errorMessage">Error here</p>)}
                <input onFocus={clearEmailErrors} onBlur={handleEmail}type={"email"} className="checkout-input" placeholder="its-a-me@sample.com"></input>
                
                {!(cart.length === 0) && (<button className="buy-button" onClick={handleOrder}>Order!</button>)}
            </div>
        </div>
    )
}

export default Form