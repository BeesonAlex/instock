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
               warehouses: response.data.warehouseArray
            })
         })
         .catch(error => {
            console.log(error)
         })
	}

	onSubmitHandler = event => {
		event.preventDefault();
		console.log(event.target);
		const postInfo = {
			warehouseName: event.target.warehouse_input.value,
			street: event.target.street_input.value,
			city: event.target.city_input.value,
			province: event.target.province_input.value,
			contactName: event.target.name_input.value,
			title: event.target.title_input.value,
			phone: event.target.phNumber_input.value,
			email: event.target.email_input.value,
			inventoryCategories: event.target.categories_description.value
		}
 
		axios
			.post(`http://localhost:8080/data/warehouses/`, postInfo)
			.then(res => {
				axios
					.get(`http://localhost:8080/data/warehouses/`)
					.then(res => {
						console.log(res.data);
						this.setState({
							warehouses: res.data.warehouseArray
						});
					});
			});
		this.closeModalHandler();
	};
	
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
						show={this.state.isShowing}>
							<div className="main-modal-div">
							<form className="modal-form" onSubmit={this.onSubmitHandler}>
									<div className="first-form-div">
										<div className="warehouse-div">
											<label className="warehouse-label" htmlFor="warehouse-input">
												WAREHOUSE
											</label>
											<input className="warehouse-input" type="text" name="warehouse_input" placeholder="Name & ID" />
										</div>
										<div className="street-div">
											<label className="street-label" htmlFor="street-input">
												STREET
											</label>
											<input className="street-input" type="text" name="street_input" placeholder="Enter Street" />
										</div>
									</div>
									<div className="second-form-div">
										<div className="city-div">
											<label className="city-label" htmlFor="city-input">
												CITY
											</label>
											<input className="city-input" type="text" name="city_input" placeholder="Enter City" />
										</div>
										<div className="province-div">
											<label className="province-label" htmlFor="province-input">
												PROVINCE
											</label>
										<input className="province-input" type="text" name="province_input" placeholder="Enter Province" />
										</div>
									</div>
									<div className="third-form-div">
										<div className="name-div">
											<label className="name-label" htmlFor="name-input">
												CONTACT NAME
											</label>
											<input className="name-input" type="text" name="name_input" placeholder="Enter Name" />
										</div>
										<div className="title-div">
											<label className="title-label" htmlFor="title-input">
												TITLE
											</label>
											<input className="title-input" type="text" name="title_input" placeholder="Enter Title" />
										</div>
									</div>
									<div className="forth-form-div">
										<div className="phNumber-div">
											<label className="phNumber-label" htmlFor="phNumber-switch">
												PHONE NUMBER
											</label>
											<input className="phNumber-input" type="text" name="phNumber_input" placeholder="(000) 000-0000" />
										</div>
										<div className="email-div">
											<label className="email-label" htmlFor="email-input">
												EMAIL
											</label>
											<input className="email-input" type="text" name="email_input" placeholder="email@instock.com" />
										</div>
									</div>
									<div className="fifth-form-div">
										<label className="categories-label" htmlFor="categories-description">
											CATEGORIES
										</label>
										<textarea className="categories-description" name="categories_description" cols="30" rows="10" placeholder="Use Commas to Separate Each Category" />
									</div>
									<div className="modal-footer">
									<button className="btn-whCancel" type="button" onClick={this.closeModalHandler}>CANCEL</button>
									<button className="btn-whSave" type="submit">SAVE</button>
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
