import React from 'react';
import searchIcon from '../../assets/Icons/SVG/Icon-search.svg';
import addIcon from '../../assets/Icons/SVG/Icon-add.svg';
import InventoryItem from './InventoryItem';
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
			//console.log(response)
			})
			.catch(error => {
			console.log(error)
      })
	};

	onSubmitHandler = event => {
		event.preventDefault();
		console.log(event.target);
		const postInfo = {
			name: event.target.product_input.value,
			lastOrdered: event.target.order_date_input.value,
			city: event.target.city_input.value,
			province:event.target.province_input.value,
			quantity: event.target.quantity_input.value,
			description: event.target.item_description.value
		}

		axios
			.post(`http://localhost:8080/data/inventory/`, postInfo)
			.then(res => {
				axios
					.get(`http://localhost:8080/data/inventory/`)
					.then(res => {
						console.log(res.data);
						this.setState({
              			inventory: res.data.inventoryArray
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

	// below is for the toggle switch
	handleChange(checked) {
		this.setState({ checked });
    };
    
    //function invoked in Dropdown component
    removeItem = (id) => {
        //console.log(id)
        axios.delete(`http://localhost:8080/data/inventory/${id}`)
            .then(response => {
                const inventory = response.data;
                this.setState({ inventory })
                console.log(inventory);
        })
            .catch(error => {
            console.log(error)
        })
    }

   render() {
		const modalShowHide = this.state.isShowing ? "modal-wrapper-show" : "modal-wrapper-hide";
      return (
         <section className="inventoryList">
            <div className="header">
               <h2 className="header__title">Inventory</h2>
               <div className="header__search">
                  <img className="header__search--searchIcon" src={searchIcon} alt="search icon" />
                  <input className="header__search--input" placeholder="Search" />
               </div>
            </div>
            <div className="subheadings">
                <div className="subheadings__group">
                    <h3 className="product__item product__heading show-headings" id="item">ITEM</h3>
                </div>
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
							show={this.state.isShowing}>
							<div className="main-modal-div">
								<form className="modal-form" onSubmit={this.onSubmitHandler}>
									<div className="first-form-div">
										<div className="product-div">
											<label className="product-label" htmlFor="product-input">PRODUCT</label>
											<input className="product-input" type="text" name="product_input" placeholder="Item Name" />
										</div>
										<div className="last-order-div">
											<label className="order-date-label" htmlFor="order-date-input">LAST ORDERED</label>
											<input className="order-date-input" type="text" name="order_date_input" placeholder="yyyy-mm-dd" />
										</div>
									</div>
									<div className="second-form-div">
										<div className="city-div">
											<label className="city-label" htmlFor="city-input">CITY</label>
											<input className="city-input" type="text" name="city_input" placeholder="City" />
										</div>
										<div className="province-div">
											<label className="province-label" htmlFor="province-input">PROVINCE</label>
											<input className="province-input" type="text" name="province_input" placeholder="Province" />
										</div>
									</div>
									<div className="third-form-div">
										<div className="quantity-div">
											<label className="quantity-label" htmlFor="quantity-input">QUANTITY</label>
											<input className="quantity-input" type="text" name="quantity_input" placeholder="0" />
										</div>
										<div className="status-div">
											<label className="status-label" htmlFor="status-switch">STATUS</label>
											<div className="status-switch-div">
												<p>In Stock</p>
												<label className="status-switch" name="status-switch" id="status-switch">
													<Switch onChange={this.handleChange} checked={!this.state.checked} checkedIcon={false} uncheckedIcon={false} boxShadow='0 0 8px rgba(0,0,0,0.3)' />
												</label>
											</div>
										</div>
									</div>
									<div className="fourth-form-div">
										<label className="item-label" htmlFor="item-description">ITEM DESCRIPTION</label>
										<textarea className="item-description" name="item_description" cols="30" rows="10" placeholder="(Optional)"></textarea>
									</div>
									<div className="modal-footer">
										<button className="btn-cancel" type="button" onClick={this.closeModalHandler}>
											CANCEL
          							</button>
										<button type="submit" className="btn-save">
											SAVE
          							</button>
									</div>
								</form>
							</div>
						</InventoryModal>
					</div>
            </div>
            <section className="inventoryItems">
               {
                  this.state.inventory.map((inventory, id) => {
                     return <InventoryItem className="inventoryItem" key={id} product={inventory} removeItem={this.removeItem}/>
                  })
               }
				</section>
         </section>
      )
   }
}

export default Inventory;