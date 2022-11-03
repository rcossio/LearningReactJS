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
        <div className="detail-card">
            <img className="detail-card--picture" src={pictureUrl} alt="A product" />
            <div className="detail-card--data">
                <h5 className="detail-card--title"> {title} </h5>
                <h6 className="detail-card--id"> {id} </h6>
                <p className="detail-card--description">{description}</p>
                <p className="detail-card--price" >${price}</p>
                <ItemCount onAdd={onAddFunction}/>
                {totalUnits !== 0
                    ?
                    <div className="h-centered-div">
                        <Link to="/cart">
                            <button className="colored--button">Go to Cart</button>
                        </Link>
                    </div>
                    : null }
            </div>
        </div>
    )
};

export default Item;