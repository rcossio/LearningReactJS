import "../../index.css";

const Item = ({data:{id,title,price,description,pictureUrl}}) => {
    return (
        <div className="item">
            <img className="item--picture" src={pictureUrl} alt="A product" />
            <h5 className="item--title"> {title} </h5>
            <h6 className="item--id"> {id} </h6>
            <p className="item--description">{description}</p>
            <p className="item--price" >${price}</p>
        </div>
    )
};

export default Item;