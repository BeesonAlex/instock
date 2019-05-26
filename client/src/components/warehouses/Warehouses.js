import React, { Component } from 'react'
import axios from 'axios';
import WarehouseItem from './WarehouseItem';
import './warehouses.scss'
import addIcon from '../../assets/Icons/SVG/Icon-add.svg'

export class Warehouses extends Component {

    //State for grabbing warehouses

    state = {
        warehouses: [
            {
                id: "",
                name: "",
                address: {
                    street: "",
                    suiteNum: "",
                    city: "",
                    province: "",
                    postal: ""
                },
                contact: {
                    name: "",
                    title: "",
                    phone: "",
                    email: ""
                },
                inventoryCategories: ""
            },
        ]
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/data/warehouses`)
            .then(response => {
                this.setState({
                    warehouses: response.data.warehouseArray,
                })
            })
            .catch(error => {
                console.log(error)
            })
    }



    render() {
        return (
            <div className="warehouses-wrapper">
                <div className="title-search-wrapper">
                    <h1 className="section__header">Locations</h1>
                    <input className="navbar__search" type="text" name="search" placeholder="Search"></input>
                </div>
                <div className="warehouses-item-wrapper">
                    <div className="warehouses__warehouse-item" id="table-labels">
                        <div className="table-label-wrapper">
                            <p className="table-label">Warehouse</p>
                        </div>
                        <div className="table-label-wrapper">
                            <p className="table-label">Contact</p>
                        </div>
                        <div className="table-label-wrapper">
                            <p className="table-label">Contact Information</p>
                        </div>
                        <div className="table-label-wrapper">
                            <p className="table-label">Categories</p>
                        </div>
                        <div className="arrow-right-placeholder"></div>
                    </div>
                    {
                        this.state.warehouses.map(warehouse => {
                            return <WarehouseItem key={warehouse.id} warehouseInfo={warehouse} />
                        })
                    }

                </div>
                <div className="add-warehouse-button"><img src={addIcon} alt="add-Icon" /></div>
            </div>
        )
    }
}

export default Warehouses
