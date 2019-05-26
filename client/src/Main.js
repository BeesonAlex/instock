import React, { Component } from 'react';
import Inventory from './components/inventory/Inventory';


export class Main extends Component {

    render() {
        return (
            <div>
                <Inventory inventory={this.state.inventory}/>
            </div>
        )
    }
}

export default Main
