import React from 'react';
import searchIcon from '../../assets/Icons/SVG/Icon-search.svg'
import InventoryItem from './InventoryItem'
import './inventory.scss';

class Inventory extends React.Component {
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
                    <h3 className="product__item product__heading">ITEM</h3>
                    <h3 className="product__lastOrdered product__heading">LAST ORDERED</h3>
                    <h3 className="product__location product__heading">LOCATION</h3>
                    <h3 className="product__quantity product__heading">QUANTITY</h3>
                    <h3 className="product__status product__heading">STATUS</h3>
                </div>
                
                <section className="inventoryItems">
                    {
                        this.props.inventory.map((inventory, id) => {
                            return <InventoryItem className="inventoryItem" key={id} product={inventory}/>
                        })
                    }
                </section>
            </section>
        )
    }
}

export default Inventory;