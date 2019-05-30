import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './router.scss';
import Test from '../test/test';
import Warehouses from '../warehouses/Warehouses';
import Header from '../header/Header';
import Inventory from '../inventory/Inventory';
import InventoryDetails from '../inventoryDetails/InventoryDetails';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" exact component={Warehouses}/>
                    <Route path="/warehouses" exact component={Warehouses}/>
                    <Route path="/warehouses/:id" exact component={Test}/>
                    <Route path="/inventory" exact component={Inventory}/>
                    <Route path="/inventory/:id" exact component={InventoryDetails}/>
                </Switch>
          </BrowserRouter>
        )
    }
}

export default Router;
