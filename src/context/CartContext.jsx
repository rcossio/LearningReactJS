import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const Provider = ({children}) => {

    let [cart, setCart] = useState([])

    let isInCart = (product) => {
        let boolean = cart.map( (it) => it.id === product.id);
        return boolean.includes(true)
    };

    let addItem = (product,quantity) => {
        if (isInCart(product)) {
            let updatedCart = cart.map((it) => {
                if (it.id === product.id) {
                    it.quantity += quantity
                }
                return it 
            })
            setCart(updatedCart);
        }
        else {
            setCart([...cart,{...product,quantity}])
        }
    };

    let removeItem = (item) => { 
        let updatedCart = cart.filter( it => !(it.id === item.id) )
        setCart(updatedCart);
    };

    let clear = () => { setCart([]) };

    let cartFunctions = {isInCart,addItem,removeItem,clear}

 
    return (
        <CartContext.Provider value={{cart,...cartFunctions}}>
            {children}
        </CartContext.Provider>
    )

}

export default Provider