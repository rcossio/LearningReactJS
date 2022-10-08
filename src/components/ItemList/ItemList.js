import "../../index.css";
import Item from "../Item/Item.js"


const ItemList = ({list}) => {
    return (
        <div className="item-list">
            {list.map(item => <Item data={item}/>)}
        </div>
    )
};

export default ItemList;