import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './warehouses.scss';
import rightArrow from '../../assets/Icons/SVG/Icon-arrow-right.svg';

export class WarehouseItem extends Component {
    render() {
        const id = this.props.warehouseInfo.id;
        return (
            <Link to={`/warehouses/${id}`}>
                <div className="warehouses__warehouse-item">
                    <div className="warehouse-item__entry-text-wrapper">
                    <div className="warehouse-item__entry-wrapper" id="warehouse-item__entry-text--first-child">
                        <p className="warehouse-item__entry warehouse-item__entry--name">{this.props.warehouseInfo.name}</p>
                        <p className="warehouse-item__entry warehouse-item__entry--address">{this.props.warehouseInfo.address.street}, {this.props.warehouseInfo.address.city}, {this.props.warehouseInfo.address.province}</p>
                    </div>
                    <div className="warehouse-item__entry-wrapper">
                        <p className="warehouse-item__entry warehouse-item__entry--manager">{this.props.warehouseInfo.contact.name}</p>
                        <p className="warehouse-item__entry warehouse-item__entry--title">{this.props.warehouseInfo.contact.title}</p>
                    </div>
                    <div className="warehouse-item__entry-wrapper">
                        <p className="warehouse-item__entry warehouse-item__entry--phone">{this.props.warehouseInfo.contact.phone}</p>
                        <p className="warehouse-item__entry warehouse-item__entry--email">{this.props.warehouseInfo.contact.email}</p>
                    </div>
                    <div className="warehouse-item__entry-wrapper">
                        <p className="warehouse-item__entry warehouse-item__entry--categories">{this.props.warehouseInfo.inventoryCategories}</p>
                    </div>
                    </div>
                    <div className="link-to-warehouse-details"><img src={rightArrow} alt="right-arrow"/></div>
                </div>
            </Link>
        )
    }
}

export default WarehouseItem;
