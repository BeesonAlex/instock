import React from 'react';
import searchIcon from '../../assets/Icons/SVG/Icon-search.svg'
import addIcon from '../../assets/Icons/SVG/Icon-add.svg'
import InventoryItem from './InventoryItem'
import './inventory.scss';
import axios from 'axios';

class Inventory extends React.Component {
    state = {
        inventory: []
      }

      componentDidMount() {    
          axios.get(`http://localhost:8080/data/inventory/`)
          .then(response => {
            const inventory = response.data.inventoryArray;
            this.setState({inventory});
          })
          .catch(error => {
            console.log(error)
          })
        }

    render() {
        return (
            <section className="inventoryList">
                <div className="header">
                    <h2 className="header__title">Inventory</h2>
                    <div className="header__search">
                        <img className="header__search--searchIcon" src={searchIcon} alt="search icon"/>
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
                    <button className="add-inventory-button" type='button'><img src={addIcon} alt="add icon"/></button>
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