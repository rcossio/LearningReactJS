import {Link} from "react-router-dom";

const Item = ({data:{id,title,price,description,pictureUrl}}) => {
    return (
        <div className="vcard">
            <img className="vcard--picture" src={pictureUrl} alt="A product" />
            <h5 className="vcard--title"> {title} </h5>
            <h6 className="vcard--id"> {id} </h6>
            <p className="vcard--description">{description}</p>
            <p className="vcard--price" >${price}</p>
            <Link to={"/item/"+String(id)}>
                <button className="colored--button">Más información</button>
            </Link>
        </div>
    )
};

export default Item;