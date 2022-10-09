import { useEffect, useState } from "react";
import getProducts from "../../backendMock.js";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    let {productId} = useParams();

    let [product,setProduct] = useState([])
    let [loading,setLoading] = useState(true)
    let [itemId,setItemId] = useState(productId)

    useEffect(
        () => {
            getProducts().then(
                (products) => { 
                    setProduct(products.find(
                        (x) => x.id === itemId
                        )
                    ) 
                    setLoading(false)
                }
            )
        },
        []
    )

    return (
        <div>
            {loading? 
            <h2 className="loading-sign">Good choice! Loading all the details...</h2>
            : <ItemDetail data={product}/>}
        </div>
    )
}

export default ItemDetailContainer