import "../../index.css";
import Logo from "../Logo/Logo.js";
import NavBar from "../NavBar/NavBar.js"

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <NavBar />
        </div>
    )
}

export default Header