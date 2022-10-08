import "../../index.css";
import { useEffect, useState } from "react";
import getProducts from "../../backendMock.js";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";

const ItemDetailContainer = ({id}) => {
    let [product,setProduct] = useState([])
    let [loading,setLoading] = useState(true)
    let [itemId,setItemId] = useState(id)

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
            null
            : <ItemDetail data={product}/>}
        </div>
    )
}

export default ItemDetailContainer