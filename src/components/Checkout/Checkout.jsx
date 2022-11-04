import { useContext,useState } from "react";
import { CartContext } from "../../context/CartContext";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";
import {db} from "../../services/firebaseConfig";
import UserData from "./UserData"
import OrderReport from "./OrderReport";

const Checkout = () => {

    let [name, setName] = useState("");
    let [phone, setPhone] = useState("");
    let [email, setEmail] = useState("");
    let [email2, setEmail2] = useState("");
    let [errorMessages,setErrorMessages] = useState({name:'', phone:'', email:''});
    let [orderId,setOrderId] = useState ('');
    let [loading,setLoading] = useState(false);

    let {cart,totalPrice,clear} = useContext(CartContext)

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
        setLoading(true);
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

            const orderCollection = collection(db,'orders');
            addDoc(orderCollection,order)
            .then( (response) => {
                setOrderId(response.id)
                console.log(response.id)
                setLoading(false);
                clear(cart);
            })
            .catch( (error) => {console.log(error)})
        }
    };

    let handler = {
        name: (e) => { setName(e.target.value) },
        phone:(e) => { setPhone(e.target.value) },
        email: (e) => { setEmail(e.target.value) },
        email2: (e) => { setEmail2(e.target.value) },
        order: handleOrder,
    }


    return (
        <div>
            {loading
            ? <h2 className="loud-text"> Processing your order...</h2>
            : (orderId === '')
                ? <UserData errorMessages={errorMessages} handler={handler}/>
                : <OrderReport orderId={orderId}/>
            }
        </div>
    )
}

export default Checkout