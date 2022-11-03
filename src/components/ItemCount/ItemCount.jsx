import { useState } from 'react';

const ItemCount = ({stock=99,onAdd}) => {
    const [counter,setCounter] = useState(1);

    const plus = () => {
        if (counter < stock) {
            setCounter(counter +1);
        }
    };

    const minus = () => {
        if (counter > 1) {
            setCounter(counter-1);
        }
    };

    return (
        <div className="cart-counter-div">
            <div className="cart-counter">
                <button className="cart-counter--side-button" onClick={minus}>-</button>
                <div className="cart-counter--number"> {counter}</div>
                <button className="cart-counter--side-button" onClick={plus}>+</button>
            </div>
            <button className="cart-counter--button" onClick={()=> {onAdd(counter)}}>Add to cart</button>
        </div>

    )

};

export default ItemCount;