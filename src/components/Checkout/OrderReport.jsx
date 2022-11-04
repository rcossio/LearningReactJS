import deliveryImg from "./delivery.png"

const OrderReport = ({orderId}) => {
    return (
            <div>
                <div className="h-centered-div">
                    <img className="small-image" src={deliveryImg} alt="Delivery Truck"/>
                </div>
                <div className="loud-text">Your order is being prepared! </div>
                <div className="loud-text">Keep your track number: {orderId}</div>
            </div>
    )
}

export default OrderReport