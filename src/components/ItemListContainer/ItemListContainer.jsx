import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList.jsx"
import { useParams } from "react-router-dom";
import {collection,getDocs,query,where} from "firebase/firestore";
import {db} from "../../services/firebaseConfig";

const ItemListContainer = () => {

    let {categoryName} = useParams();

    let [products,setProducts] = useState([]);
    let [loading,setLoading] = useState(true);


    useEffect(
        () => {
            setLoading(true)
            const productsCollection = categoryName
                ? query(collection(db,'products'),where("category_id","==",categoryName))
                : collection(db,'products')

            getDocs(productsCollection)
            .then(
                (response) => {
                    let products = response.docs.map( (item) => {
                        return {
                            id: item.id,
                            ...item.data()
                        }
                    })
                    setProducts(products)
                    setLoading(false)
                }
            )
            .catch( (error) => console.log(error) )
        },
        [categoryName])

    return(
        <div>
            {loading? 
            <h2 className="loud-text">Loading products...</h2>
            :<ItemList list={products}/>}
        </div>
    )
}

export default ItemListContainer 
