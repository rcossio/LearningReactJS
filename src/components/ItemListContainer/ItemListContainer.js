import { useEffect, useState } from "react";
import "../../index.css";
import ItemList from "../ItemList/ItemList.js"
import getProducts from "../../backendMock";



const ItemListContainer = () => {

    let [products,setProducts] = useState([]);
    let [loading,setLoading] = useState(true);


    useEffect(
        ()=>{
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
            {loading? <h2 className="loading-sign">Loading products...</h2>:null}
            <ItemList list={products}/>
        </div>
    )
}

export default ItemListContainer 