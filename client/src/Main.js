import React, { Component } from 'react';
import axios from 'axios';
import Inventory from './components/inventory/Inventory';


export class Main extends Component {
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
            <div>
                <Inventory inventory={this.state.inventory}/>
            </div>
        )
    }
}

export default Main
