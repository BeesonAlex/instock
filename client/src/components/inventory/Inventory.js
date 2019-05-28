import React from 'react';
import searchIcon from '../../assets/Icons/SVG/Icon-search.svg'
import addIcon from '../../assets/Icons/SVG/Icon-add.svg'
import InventoryItem from './InventoryItem'
import axios from 'axios';
import InventoryModal from "./InventoryModal.js";
import Switch from "react-switch";
import './inventoryModal.scss';
import './inventory.scss';

class Inventory extends React.Component {
   state = {
      inventory: [],
      // below is for the modal itself
      isShowing: false,

      // below is for the toggle switch
      checked: false
   };
   // below line needs to be changed to an arrow function.
   handleChange = this.handleChange.bind(this);

   componentDidMount() {    
      axios.get(`http://localhost:8080/data/inventory/`)
			.then(response => {
			const inventory = response.data.inventoryArray;
			this.setState({inventory});
			})
			.catch(error => {
			console.log(error)
      })
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

	// below is for the toggle switch
	handleChange(checked) {
		this.setState({ checked });
	};

   render() {
		const modalShowHide = this.state.isShowing ? "modal-wrapper-show" : "modal-wrapper-hide";
      return (
         <section className="inventoryList">
            <div className="header">
               <h2 className="header__title">Inventory</h2>
               <div className="header__search">
                  <img className="header__search--searchIcon" src={searchIcon} alt="search icon"/>
                  <input className="header__search--input" placeholder="Search" />
               </div>
            </div>
            <div className="subheadings show-headings">
               <h3 className="product__item product__heading show-headings" id="item">ITEM</h3>
               <h3 className="product__lastOrdered product__heading show-headings">LAST ORDERED</h3>
               <h3 className="product__location product__heading show-headings">LOCATION</h3>
               <h3 className="product__quantity product__heading show-headings">QUANTITY</h3>
               <h3 className="product__status product__heading show-headings">STATUS</h3>
            </div>
            <div>
					<button className="add-inventory-button" type="button" onClick={this.openModalHandler}><img src={addIcon} alt="add icon"/></button>
					<div className={modalShowHide}>
						<InventoryModal
							className="modal"
							show={this.state.isShowing}
							close={this.closeModalHandler}>
							<div className="main-modal-div">
								<form className="modal-form" id="modal-form">
									<div className="first-form-div">
										<div className="product-div">
											<label className="product-label" htmlFor="product-input">PRODUCT</label>
											<input className="product-input" type="text" name="product-input" id="product-input" placeholder="Item Name" />
										</div>
										<div className="last-order-div">
											<label className="order-date-label" htmlFor="order-date-input">LAST ORDERED</label>
											<input className="order-date-input" type="text" name="order-date-input" id="order-date-input" placeholder="yyyy-mm-dd" />
										</div>
									</div>
									<div className="second-form-div">
										<div className="city-div">
											<label className="city-label" htmlFor="city-input">CITY</label>
											<input className="city-input" type="text" name="city-input" id="city-input" placeholder="City" />
										</div>
										<div className="country-div">
											<label className="country-label" htmlFor="country-dropdown">COUNTRY</label>
											<select className="country-dropdown" name="country-dropdown" id="country-dropdown">
												<option value="Canada">Canada</option>
												<option value="USA">USA</option>
												<option value="Mexico">Mexico</option>
											</select>
										</div>
									</div>
									<div className="third-form-div">
										<div className="quantity-div">
											<label className="quantity-label" htmlFor="quantity-input">QUANTITY</label>
											<input className="quantity-input" type="text" name="quantity-input" id="quantity-input" placeholder="0" />
										</div>
										<div className="status-div">
											<label className="status-label" htmlFor="status-switch">STATUS</label>
											<div className="status-switch-div">
												<p>In Stock</p>
												<label className="status-switch" name="status-switch" id="status-switch">
													<Switch onChange={this.handleChange} checked={!this.state.checked} checkedIcon={false} uncheckedIcon={false} />
												</label>
											</div>
										</div>
									</div>
									<div className="fourth-form-div">
										<label className="item-label" htmlFor="item-description">ITEM DESCRIPTION</label>
										<textarea className="item-description" name="item-description" id="item-description" cols="30" rows="10" placeholder="(Optional)"></textarea>
									</div>
								</form>
							</div>
						</InventoryModal>
					</div>
            </div>
            <section className="inventoryItems">
               {
                  this.state.inventory.map((inventory, id) => {
                     return <InventoryItem className="inventoryItem" key={id} product={inventory}/>
                  })
               }
				</section>
         </section>
      )
   }
}

export default Inventory;