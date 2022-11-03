import { Fragment, useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { useParams } from "react-router-dom";
import {collection,getDoc,doc} from "firebase/firestore";
import {db} from "../../services/firebaseConfig";
import ItemListContainer from "../ItemListContainer/ItemListContainer.jsx";

const ItemDetailContainer = () => {
    let {productId} = useParams();

    let [product,setProduct] = useState([])
    let [loading,setLoading] = useState(true)

    useEffect(
        () => {
            const productsCollection = collection(db,'products');
            let productReference = doc(productsCollection,productId)
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
        }
    ,[productId])

    return (
        <div>
            {loading? 
            <h2 className="loud-text">Good choice! Loading all the details...</h2>
            : (product.title)?
                <ItemDetail data={product}/>:
                <Fragment>
                    <div className="banner-div">Sorry. Product was not found. Check these products instead!</div>
                    <ItemListContainer/>
                </Fragment>
                }
        </div>
    )
}

export default ItemDetailContainer