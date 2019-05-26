import React from 'react';

class InventoryItem extends React.Component {
    render() {
        const { name, description, lastOrdered, location, quantity, isInstock } = this.props.product;
        console.log(this.props.product)
        return (
            <div className="product">
                <h3 className="product__item">ITEM</h3>
                <div className="product__detail">
                    <h3 className="product__name">{name}</h3>
                    <p className="product__description product__detail">{description}</p>
                </div>
                <h3 className="product__lastOrdered product__heading">LAST ORDERED</h3>
                <h3 className="product__lastOrdered product__detail">{lastOrdered}</h3>
                <h3 className="product__location product__heading">LOCATION</h3>
                <h3 className="product__location product__detail">{location}</h3>
                <h3 className="product__quantity product__heading">QUANTITY</h3>
                <h3 className="product__quantity product__detail">{quantity}</h3>
                <h3 className="product__status product__heading">STATUS</h3>
                <h3 className="product__status product__detail">{isInstock}</h3>
            </div>
        )
    }
}

export default InventoryItem;