import CartWidget from "../CartWidget/CartWidget.jsx";
import { Link} from "react-router-dom";

const NavBar = () => {
    return (
    <nav className="navbar">
        <Link className="navbar--brandname" to="/">
            <h1>Fake store!</h1>
        </Link>
        <div className="navbar-body">
            <ul className="navbar-list">
                <Link className="navbar-list-item" to="/category/MLA11034">Macetas</Link>
                <Link className="navbar-list-item" to="/category/MLA392282">Mates</Link>
                <Link className="navbar-list-item" to="/category/MLA433029">Otros</Link>
            </ul>
            <Link to="/cart">
                <CartWidget/>
            </Link>
        </div>
    </nav>
    )
}

export default NavBar