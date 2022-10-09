import ItemCount from "../ItemCount/ItemCount"

const Item = ({data:{id,title,price,description,pictureUrl}}) => {
    return (
        <div className="item-detail">
            <img className="item-detail--picture" src={pictureUrl} alt="A product" />
            <div className="item-detail--data">
                <h5 className="item-detail--title"> {title} </h5>
                <h6 className="item-detail--id"> {id} </h6>
                <p className="item-detail--description">{description}</p>
                <p className="item-detail--price" >${price}</p>
                <ItemCount onAdd={() => {console.log("running function onAdd")}}/>
            </div>
        </div>
    )
};

export default Item;