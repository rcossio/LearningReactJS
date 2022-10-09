import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList.jsx"
import getProducts from "../../backendMock.js";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

    let {categoryName} = useParams();

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
            :<ItemList list={products.filter( (x) => (categoryName? x.category_id === categoryName: true))}/>}
        </div>
    )
}

export default ItemListContainer 