import "../index.css";
import logo from "./logo.png";

const Logo = () => {
    return (
        <picture>
            <img className="logo" alt='Logo' src={logo} />
        </picture>
    )
}

export default Logo