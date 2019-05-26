import React from 'react';
import searchIcon from '../../assets/Icons/SVG/Icon-search.svg'
import InventoryItem from './InventoryItem'

class Inventory extends React.Component {
    render() {
        console.log(this.props.inventory)
        return (
            <>
                <div className="header">
                    <h2 className="header__title">Inventory</h2>
                    <div className="header__search">
                        <img className="header__search--searchIcon" src={searchIcon} alt="search icon"/>
                        <input className="header__search--input" placeholder="search" />
                    </div>
                    
                </div>
                <div className="subheadings">
                    <h3 className="product__item">ITEM</h3>
                    <h3 className="product__lastOrdered">LAST ORDERED</h3>
                    <h3 className="product__location">LOCATION</h3>
                    <h3 className="product__quantity">QUANTITY</h3>
                    <h3 className="product__status">STATUS</h3>
                </div>
                
                <section className="inventoryItems">
                    {
                        this.props.inventory.map((inventory, id) => {
                            return <InventoryItem className="inventoryItem" key={id} product={inventory}/>
                        })
                    }
                </section>
            </>
        )
    }
}

export default Inventory;