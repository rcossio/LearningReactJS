import logo from "./logo.png";
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <picture>
            <Link to="/">
                <img className="logo" alt='Logo' src={logo} />
            </Link>
        </picture>
    )
}

export default Logo