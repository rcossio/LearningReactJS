import "./navbar.css";
import CartWidget from "./cartwidget.js"

const NavBar = () => {
    return (
    <nav className="navbar">
        <h1>Fake store!</h1>
        <div className="navbar-body">
            <ul className="navbar-list">
                <li className="navbar-list-item"> Title 1 </li>
                <li className="navbar-list-item"> Title 2 </li>
                <li className="navbar-list-item"> Title 3 </li>
                <li className="navbar-list-item"> Title 4 </li>
            </ul>
            <CartWidget/>
        </div>
    </nav>
    )
}

export default NavBar