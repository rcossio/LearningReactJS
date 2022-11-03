import CartWidget from "../CartWidget/CartWidget.jsx";
import { Link} from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import {db} from "../../services/firebaseConfig"
import { useEffect,useState } from "react";

const NavBar = () => {

    let [categories,setCategories] = useState ([])

    useEffect( () => {
        const categoryCollection = collection(db,'categories')
        getDocs(categoryCollection)
        .then ( (response) => {
            let fetchedCategories = response.docs.map( (item) => {
                return {
                    id: item.id,
                    ...item.data()
                }
            })
            setCategories( fetchedCategories )
        })
        .catch ( (error) => console.log(error) )
    },[])

    return (
    <nav className="navbar">
        <Link className="navbar--brandname" to="/">
            <h1>Fake store!</h1>
        </Link>
        <div className="navbar-body">
            <ul className="navbar-list">
                {!(categories.length === 0) && categories.map( (category) => (
                    <Link className="navbar-list-item" key={`${category.id}`} to={`/category/${category.id}`}>{category.cat_title}</Link>
                ) )
                }
            </ul>
            <Link to="/cart">
                <CartWidget/>
            </Link>
        </div>
    </nav>
    )
}

export default NavBar