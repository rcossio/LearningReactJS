import "./header.css";
import Logo from "./logo.js";
import NavBar from "./navbar.js"

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <NavBar />
        </div>
    )
}

export default Header