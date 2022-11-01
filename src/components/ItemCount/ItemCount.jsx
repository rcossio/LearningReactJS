import { useState } from 'react';

const ItemCount = ({stock=99,onAdd}) => {
    const [counter,setCounter] = useState(0);

    const plus = () => {
        if (counter < stock) {
            setCounter(counter +1);
        }
    };

    const minus = () => {
        if (counter > 0) {
            setCounter(counter-1);
        }
    };

    return (
        <div className="item-counter-w-button">
            <div className="item-counter">
                <button className="item-counter--button" onClick={minus}>-</button>
                <div className="item-counter--number"> {counter}</div>
                <button className="item-counter--button" onClick={plus}>+</button>
            </div>
            <button className="item-counter-w-button--addToCartButton" onClick={()=> {onAdd(counter)}}>Add to cart</button>
        </div>

    )

};

export default ItemCount;