import Logo from "./Logo.jsx";
import NavBar from "../Header/NavBar.jsx"

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <NavBar />
        </div>
    )
}

export default Header