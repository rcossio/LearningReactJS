import { useContext,useState } from "react";
import { CartContext } from "../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";

const Checkout = () => {

    let [name, setName] = useState("");
    let [phone, setPhone] = useState("");
    let [email, setEmail] = useState("");
    let [email2, setEmail2] = useState("");
    let [errorMessages,setErrorMessages] = useState({name:'', phone:'', email:''});


    let {cart,totalPrice} = useContext(CartContext)

    let handleName = (e) => { setName(e.target.value) }

    let handlePhone = (e) => { setPhone(e.target.value) }

    let handleEmail = (e) => { setEmail(e.target.value) }
    let handleEmail2 = (e) => { setEmail2(e.target.value) }


    let checkErrors = () => {
        let nameError = '';
        let phoneError = '';
        let emailError = '';

        nameError = (name.length === 0)? 
        'Error: empty field'
        : ''

        phoneError = (phone.length === 0)? 
        'Error: empty field' 
        : (phone <= 0)? 
            'Error: invalid phone number' 
            : ''
        
        emailError = (email.length === 0)?
        'Error: empty field'
        : (!email.includes('@'))?
            'Error: invalid email'
            :!(email === email2)?
                'Error: e-mails are different'
                :''

        const errors = {name:nameError, phone:phoneError, email:emailError}
        let errorFlag = (nameError || phoneError || emailError)
        return [errorFlag, errors]
        }


    let handleOrder = () => {
        let [errorFlag,errors] = checkErrors ()

        if (errorFlag) {
            setErrorMessages(errors)
        } else {
            setErrorMessages({name:'', phone:'', email:''})
            const order = {
                buyer: {name,phone,email},
                items: cart,
                date: serverTimestamp(),
                total: totalPrice(cart),
            };
            console.log(order)
        }
    };


    return (
        <div>
            <div className="form-container">
                <div className="form-title">Full Name:</div>
                {errorMessages.name && (<p className="warning-text">{errorMessages.name}</p>)}
                <input onBlur={handleName} type={"text"} className="form-input" placeholder="Name"></input>

                <div className="form-title">Telephone:</div>
                {errorMessages.phone && (<p className="warning-text">{errorMessages.phone}</p>)}
                <input onBlur={handlePhone} type={"number"} className="form-input" placeholder="Phone"></input>

                <div className="form-title">e-mail</div>
                {errorMessages.email && (<p className="warning-text">{errorMessages.email}</p>)}
                <input onBlur={handleEmail} type={"email"} className="form-input" placeholder="its-a-me@sample.com"></input>

                <div className="form-title">Write your e-mail again</div>
                {errorMessages.email && (<p className="warning-text">{errorMessages.email}</p>)}
                <input onBlur={handleEmail2} type={"email"} className="form-input" placeholder="its-a-me@sample.com"></input>

                {!(cart.length === 0) && (<button className="striking-button" onClick={handleOrder}>Order!</button>)}
            </div>
        </div>
    )
}

export default Checkout