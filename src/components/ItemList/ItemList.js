import "../../index.css";
import Item from "../Item/Item.js"


const ItemList = ({list}) => {
    return (
        <div className="item-list">
            {list.map(item => 
            <li className="item-list-li" key={item.id}>
                <Item data={item}/>
            </li>
            )}
        </div>
    )
};

export default ItemList;