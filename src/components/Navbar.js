import "../index.css";
import CartWidget from "./Cartwidget.js";

const NavBar = () => {
    return (
    <nav className="navbar">
        <h1>Fake store!</h1>
        <div className="navbar-body">
            <ul className="navbar-list">
                <li className="navbar-list-item"> Celulares </li>
                <li className="navbar-list-item"> Notebooks </li>
                <li className="navbar-list-item"> Accesorios </li>
                <li className="navbar-list-item"> Juegos </li>
            </ul>
            <CartWidget/>
        </div>
    </nav>
    )
}

export default NavBar