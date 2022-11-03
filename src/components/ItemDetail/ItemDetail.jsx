import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Item = ({data:{id,title,price,description,pictureUrl}}) => {

    let [totalUnits,setTotalUnits] = useState(0);  

    const {addItem} = useContext(CartContext)

    const onAddFunction = (units) => {
        setTotalUnits(totalUnits+units);
        addItem({id,title,price,description,pictureUrl},units)
    }

    return (
        <div className="item-detail">
            <img className="item-detail--picture" src={pictureUrl} alt="A product" />
            <div className="item-detail--data">
                <h5 className="item-detail--title"> {title} </h5>
                <h6 className="item-detail--id"> {id} </h6>
                <p className="item-detail--description">{description}</p>
                <p className="item-detail--price" >${price}</p>
                <ItemCount onAdd={onAddFunction}/>
                {totalUnits !== 0
                    ?
                    <div className="go-to-cart-div">
                        <Link to="/cart">
                            <button className="item--button">Go to Cart</button>
                        </Link>
                    </div>
                    : null }
            </div>
        </div>
    )
};

export default Item;