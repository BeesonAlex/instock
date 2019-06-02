import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './warehouseDetails.scss';
import backarrow from '../../assets/Icons/SVG/Icon-back-arrow.svg';
import InventoryItem from '../inventory/InventoryItem';
import axios from 'axios';

class WarehouseDetails extends Component {

    state = {
        locationDetails: {
            name: '',
            address: {
                city: '',
                postal: '',
                province: '',
                street: '',
                suiteNum: ''
            },
            contact: {
                email: '',
                name: '',
                phone: '',
                title: '',
            },
            id: '',
            inventoryCategories: ''
        },
        allInventory: [],
        localInventory: []
    };

    componentDidMount() {
        const {id} = this.props.match.params;
        axios.get(`http://localhost:8080/data/inventory/`)
            .then(response => {
                let allInventory = response.data.inventoryArray;
                this.setState({allInventory});
                const localInventory = allInventory.filter((inventory) => {
                    return (inventory.warehouseId === this.props.match.params.id)
                })
                this.setState({localInventory});
            })
            .catch(error => {
                console.log(error);
            });
        axios.get(`http://localhost:8080/data/warehouses/${id}`)
            .then(response => {
                let locationDetails = response.data.targetWarehouse;
                this.setState({locationDetails});
            })
            .catch(error => {
                console.log(error);
            });
    };

    removeItem = (id) => {
        axios.delete(`http://localhost:8080/data/inventory/${id}`)
            .then(response => {
                let allInventory = response.data;
                this.setState({allInventory});
                console.log(allInventory)
        })
            .catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <>
            <section className="warehouseDetails">
                <h1 className="warehouseDetails__title">
                    <Link className="warehouseDetails__backArrow--link" to={"/warehouses"}><img className="warehouseDetails__backArrow" src={backarrow} alt="back" /></Link>
                    {this.state.locationDetails.name}
                </h1>
                <div className="warehouseDetails__divider" />
                <div className="warehouseDetails-container">
                    <div className="warehouseDetails__address">
                        <h4 className="warehouseDetails__address--label">ADDRESS</h4>
                        <div className="warehouseDetails__street-container">
                            <h3 className="warehouseDetails__address--street">{this.state.locationDetails.address.street}</h3>
                            <h3 className="warehouseDetails__address--suite">{this.state.locationDetails.address.suiteNum}</h3>
                        </div>
                        <div className="warehouseDetails__city-container">
                            <h3 className="warehouseDetails__address--city">{this.state.locationDetails.address.city}, ON</h3>
                            <h3 className="warehouseDetails__address--postal-code">{this.state.locationDetails.address.postal} CA</h3>
                        </div>
                    </div>
                    <div className="warehouseDetails__contact">
                        <h4 className="warehouseDetails__contact--label">CONTACT</h4>
                        <div className="warehouseDetails-contact-container">
                            <h3 className="warehouseDetails__contact--name">{this.state.locationDetails.contact.name}</h3>
                            <h3 className="warehouseDetails__contact--job-title">{this.state.locationDetails.contact.title}</h3>
                        </div>
                        <div className="warehouseDetails__phone-container">
                            <h3 className="warehouseDetails__contact--phone">+1 {this.state.locationDetails.contact.phone}</h3>
                            <h3 className="warehouseDetails__contact--email">{this.state.locationDetails.contact.email}</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="inventoryDetails">
                {this.state.localInventory.map((localInventory, id) => {
                    return <InventoryItem className="inventoryItem" key={id} product={localInventory} removeItem={this.removeItem}/>})
                }
            </section>
            </>
        )
    }
}

export default WarehouseDetails;