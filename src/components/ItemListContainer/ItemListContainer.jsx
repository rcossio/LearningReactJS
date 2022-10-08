import { useEffect, useState } from "react";
import "../../index.css";
import ItemList from "../ItemList/ItemList.jsx"
import getProducts from "../../backendMock.js";



const ItemListContainer = () => {

    let [products,setProducts] = useState([]);
    let [loading,setLoading] = useState(true);


    useEffect(
        () => {
            getProducts().then(
                (products) => {
                    setProducts(products)
                    setLoading(false)
                }
            )
        },
        [])

    return(
        <div className="item-list-container">
            {loading? 
            <h2 className="loading-sign">Loading products...</h2>
            :<ItemList list={products}/>}
        </div>
    )
}

export default ItemListContainer 