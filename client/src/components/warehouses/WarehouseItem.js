import React, { Component } from 'react'
import './warehouses.scss';

export class WarehouseItem extends Component {
    render() {
        return (
            <div className="warehouses__warehouse-item">
                <div className="warehouse-item__entry-wrapper">
                    <p className="warehouse-item__entry warehouse-item__entry--name">{this.props.warehouseInfo.name}</p>
                    <p className="warehouse-item__entry warehouse-item__entry--address">{this.props.warehouseInfo.address.street}, {this.props.warehouseInfo.address.suiteNum}, {this.props.warehouseInfo.address.city}, {this.props.warehouseInfo.address.province}, {this.props.warehouseInfo.address.postal}</p>
                </div>
                <div className="warehouse-item__entry-wrapper">
                    <p className="warehouse-item__entry warehouse-item__entry--manager">{this.props.warehouseInfo.contact.contactName}</p>
                    <p className="warehouse-item__entry warehouse-item__entry--title">{this.props.warehouseInfo.contact.title}</p>
                </div>
                <div className="warehouse-item__entry-wrapper">
                    <p className="warehouse-item__entry warehouse-item__entry--phone">{this.props.warehouseInfo.contact.phone}</p>
                    <p className="warehouse-item__entry warehouse-item__entry--email">{this.props.warehouseInfo.contact.email}</p>
                </div>
                <div className="warehouse-item__entry-wrapper">
                    <p className="warehouse-item__entry warehouse-item__entry--categories">{this.props.warehouseInfo.categories}</p>
                </div>
                
                <div className="link-to-warehouse info">></div>
            </div>
        )
    }
}

export default WarehouseItem
