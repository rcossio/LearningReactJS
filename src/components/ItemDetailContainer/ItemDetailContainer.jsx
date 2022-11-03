import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { useParams } from "react-router-dom";
import {collection,getDoc,doc} from "firebase/firestore";
import {db} from "../../services/firebaseConfig";

const ItemDetailContainer = () => {
    let {productId} = useParams();

    let [product,setProduct] = useState([])
    let [loading,setLoading] = useState(true)
    let [itemId,setItemId] = useState()
    setItemId(productId)
    
    useEffect(
        () => {
            const productsCollection = collection(db,'products');
            let productReference = doc(productsCollection,itemId)
            getDoc(productReference)
            .then(
                (item) => {
                    setProduct({
                            id: item.id,
                            ...item.data()
                        }
                    )
                    setLoading(false)
                }
            )
            .catch( (error) => console.log(error) )
        },
        [itemId]
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