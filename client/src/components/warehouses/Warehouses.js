import React, { Component } from 'react'
import axios from 'axios';
import WarehouseItem from './WarehouseItem';
import addIcon from '../../assets/Icons/SVG/Icon-add.svg'
import WarehouseModal from "./WarehouseModal.js";
import "./warehouseModal.scss";
import './warehouses.scss'

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
         }
      ],
      isShowing: false
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

	// componentDidUpdate() {
	// 	axios.post(`http://localhost:8080/data/warehouses`)
	// 		.then(response => {
	// 			this.setState({
	// 				warehouses: response.data.warehouseArray,
	// 			})
	// 		})
	// 		.catch(error => {
	// 			console.log(error)
	// 		})
	// }
	
	openModalHandler = () => {
		this.setState({
			isShowing: true
		});
	};

	closeModalHandler = () => {
		this.setState({
			isShowing: false
		});
	};


   render() {
		const modalShowHide = this.state.isShowing ? "modal-wrapper-show" : "modal-wrapper-hide";
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
				<div className="add-warehouse-button" onClick={this.openModalHandler}><img src={addIcon} alt="add-Icon" /></div>
				<div className={modalShowHide}>
					<WarehouseModal
						className="modal"
						show={this.state.isShowing}
						close={this.closeModalHandler}>
							<div className="main-modal-div">
								<form className="modal-form" id="modal-form">
									<div className="first-form-div">
										<div className="warehouse-div">
											<label className="warehouse-label" htmlFor="warehouse-input">
												WAREHOUSE
											</label>
											<input className="warehouse-input" type="text" name="warehouse-input" id="warehouse-input" placeholder="Name & ID" />
										</div>
										<div className="empty-div">
											<label className="empty-label" htmlFor="empty-input">
											</label>
											<input className="empty-input" type="text" name="empty-input" id="empty-input" placeholder="" />
										</div>
									</div>
									<div className="second-form-div">
										<div className="address-div">
											<label className="address-label" htmlFor="address-input">
												ADDRESS
											</label>
											<input className="address-input" type="text" name="address-input" id="address-input" placeholder="Enter Address" />
										</div>
										<div className="location-div">
											<label className="location-label" htmlFor="location-dropdown">
												LOCATION
											</label>
											<select className="location-dropdown" name="location-dropdown" id="location-dropdown">
												<option value="Toronto">Toronto, CAN</option>
												<option value="NewYorkCity">New York City, USA</option>
												<option value="MexicoCity">Mexico City, MEX</option>
											</select>
										</div>
									</div>
									<div className="third-form-div">
										<div className="contact-div">
											<label className="contact-label" htmlFor="contact-input">
												CONTACT NAME
											</label>
											<input className="contact-input" type="text" name="contact-input" id="contact-input" placeholder="Enter Name" />
										</div>
										<div className="position-div">
											<label className="position-label" htmlFor="position-input">
												POSITION
											</label>
											<input className="position-input" type="text" name="position-input" id="position-input" placeholder="Enter Position" />
										</div>
									</div>
									<div className="forth-form-div">
										<div className="phNumber-div">
											<label className="phNumber-label" htmlFor="phNumber-switch">
												PHONE NUMBER
											</label>
											<input className="phNumber-input" type="text" name="phNumber-input" id="phNumber-input" placeholder="(000) 000-0000" />
										</div>
										<div className="email-div">
											<label className="email-label" htmlFor="email-input">
												EMAIL
											</label>
											<input className="email-input" type="text" name="email-input" id="email-input" placeholder="email@instock.com" />
										</div>
									</div>
									<div className="fifth-form-div">
										<label className="item-label" htmlFor="item-description">
											ITEM DESCRIPTION
										</label>
									<textarea className="item-description" name="item-description" id="item-description" cols="30" rows="10" placeholder="Use Commas to Separate Each Category" />
									</div>
								</form>
							</div>
					</WarehouseModal>
				</div>
         </div>
      )
   }
}

export default Warehouses;
