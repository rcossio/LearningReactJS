import "../index.css";
import Logo from "./Logo.js";
import NavBar from "./Navbar.js"

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <NavBar />
        </div>
    )
}

export default Header