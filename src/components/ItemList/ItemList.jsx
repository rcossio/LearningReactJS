import Item from "../Item/Item.jsx"


const ItemList = ({list}) => {
    return (
        <div className="item-list-div">
            {list.map(item => 
            <li key={item.id}>
                <Item data={item}/>
            </li>
            )}
        </div>
    )
};

export default ItemList;