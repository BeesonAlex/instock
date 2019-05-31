import React, { Component } from 'react';
import './warehouseDetails.scss';

class WarehouseDetails extends Component {
    render() {
        return (
            <>
            <section className="warehouseDetails">
                <h1 className="warehouseDetails__title">
                    Warehouse Name
                </h1>
                <div className="warehouseDetails__address">
                    <h4 className="warehouseDetails__address--label">ADDRESS</h4>
                    <div className="warehouseDetails__street-container">
                        <h3 className="warehouseDetails__address--street">123 Main Street</h3>
                        <h3 className="warehouseDetails__address--suite">Suite 201</h3>
                    </div>
                    <div className="warehouseDetails__city-container">
                        <h3 className="warehouseDetails__address--city">Toronto, ON</h3>
                        <h3 className="warehouseDetails__address--postal-code">M65GB7 CA</h3>
                    </div>
                </div>
                <div className="warehouseDetails__contact-container">
                    <h4 className="warehouseDetails__contact--label">CONTACT</h4>
                    <div className="warehouseDetails-container">
                        <h3 className="warehouseDetails__contact--name">Mara Weinberg</h3>
                        <h3 className="warehouseDetails__contact--job-title">Warehouse Manager</h3>
                    </div>
                    <div className="warehouseDetails__phone-container">
                        <h3 className="warehouseDetails__contact--phone">+1 416 678 2345</h3>
                        <h3 className="warehouseDetails__contact--email">weinberg@instock.com</h3>
                    </div>
                </div>
            </section>
            <section className="inventoryDetails">
                
            </section>
            </>
        )
    }
}

export default WarehouseDetails;