import React from 'react';

class Inventory extends React.Component {
    render() {
        return (
            <>
                <div className="header">
                    <h2 className="header__title">Inventory</h2>
                    <input className="header__search" placeholder="search" />
                </div>
                <div className="sub-heading">
                    <h3>ITEM</h3>
                    <h3>LAST ORDERED</h3>
                    <h3>LOCATION</h3>
                    <h3>QUANTITY</h3>
                </div>
            </>
        )
    }
}

export default Inventory;