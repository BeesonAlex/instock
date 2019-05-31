import React from 'react';
import { Link } from 'react-router-dom';
import './inventory.scss';
//import kebabIcon from '../../assets/Icons/SVG/Icon-kebab-default.svg';
import Dropdown from './Dropdown';

class InventoryItem extends React.Component {
    render() {
        const { id, name, description, lastOrdered, location, quantity, isInstock } = this.props.product;
        return (
            <div className="product">
                <div className="product__top">
                    <h3 className="product__item product__heading">ITEM</h3>
                    <Dropdown id={id} className="displayMobile"/>
                </div>
                <Link to={{
                    pathname:`/inventory/${id}`,
                }}>
                <div className="product__group">
                    <h3 className="product__name">{name}</h3>
                    <p className="product__description product__detail">{description}</p>
                </div>
                </Link>
                <h3 className="product__lastOrdered product__heading">LAST ORDERED</h3>
                <p className="product__lastOrdered product__detail">{lastOrdered}</p>
                <h3 className="product__location product__heading">LOCATION</h3>
                <p className="product__location product__detail">{location}</p>
                <h3 className="product__quantity product__heading">QUANTITY</h3>
                <p className="product__quantity product__detail">{quantity}</p>
                <h3 className="product__status product__heading">STATUS</h3>
                <p className="product__status product__detail">{isInstock ? 'In Stock' : 'Out of Stock'}</p>
            </div>
        )
    }
}

export default InventoryItem;