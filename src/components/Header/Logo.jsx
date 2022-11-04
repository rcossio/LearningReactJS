import logo from "./logo.png";
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <picture>
            <Link to="/">
                <img className="small-image" alt='Logo' src={logo} />
            </Link>
        </picture>
    )
}

export default Logo