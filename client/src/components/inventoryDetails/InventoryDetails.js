import React, { Component } from 'react';
import backIcon from '../../assets/Icons/SVG/Icon-back-arrow.svg';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './inventoryDetails.scss';

export class InventoryDetails extends Component {

    state = {
        inventoryDetails: {},
        warehouseDetails: {
            address: {},
            contact: {},
        },
    }


    componentDidMount() {
        const { id } = this.props.match.params

        axios.get(`http://localhost:8080/data/inventory/${id}`)
            .then(response => {
                this.setState({
                    inventoryDetails: response.data,
                })

                axios.get(`http://localhost:8080/data/warehouses/${this.state.inventoryDetails.warehouseId}`)
                    .then(response => {
                        this.setState({
                            warehouseDetails: response.data.targetWarehouse,
                        })
                    })
                    .catch(error => {
                        alert("Hmmm no warehouse with that ID")
                        console.log(error)
                    })

            })
            .catch(error => {
                alert("Hmmm no product with that ID")
                console.log(error)
            })
    }


    render() {
        console.log(this.state)
        return (
            <section className="inventory-details-wrapper">
                <div className="title-wrapper">
                    <div className="title__back-link">
                        <Link to="/inventory">
                            <img className="title__back-button" src={backIcon} alt="back-icon" />
                        </Link>
                        <h1 className="section__header">{this.state.inventoryDetails.name}</h1>
                    </div>

                    {this.state.inventoryDetails.isInstock ? <div className="title__instock-section instock">In Stock</div> : <div className="title__instock-section out-of-stock">Out of Stock</div>}

                </div>
                <div className="product-information-wrapper">
                    <div className="product-information__description-wrapper">
                        <p className="product-information__label">Item Description</p>
                        <p className="product-information__description">{this.state.inventoryDetails.description}</p>
                    </div>
                    <div className="product-information__details-wrapper">
                        <div className="product-information-wrapper" id="ordered-by-wrapper">
                            <p className="product-information__label">Ordered By</p>
                            <p className="product-information__description">{this.state.warehouseDetails.contact.name}</p>
                        </div>
                        <div className="product-information-wrapper" id="reference-number-wrapper">
                            <p className="product-information__label">Reference Number</p>
                            <p className="product-information__description">{this.state.inventoryDetails.id}</p>
                        </div>
                        <div className="product-information-wrapper" id="last-ordered-wrapper">
                            <p className="product-information__label">Last Ordered</p>
                            <p className="product-information__description">{this.state.inventoryDetails.lastOrdered}</p>
                        </div>
                        <div className="product-information-wrapper" id="location-wrapper">
                            <p className="product-information__label">Location</p>
                            <p className="product-information__description">{this.state.warehouseDetails.name}</p>
                        </div>
                        <div className="product-information-wrapper" id="quantity-wrapper">
                            <p className="product-information__label">Quantity</p>
                            <p className="product-information__description">{this.state.inventoryDetails.quantity}</p>
                        </div>
                        <div className="product-information-wrapper" id="categories-wrapper">
                            <p className="product-information__label">Categories</p>
                            <p className="product-information__description">{this.state.inventoryDetails.categories}</p>
                        </div>
                    </div>
                </div>
                <div className="button-wrapper">
                    <button className="button">Edit</button>
                </div>
            </section>
        )
    }
}

export default InventoryDetails
