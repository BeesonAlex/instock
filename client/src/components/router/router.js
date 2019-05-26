import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './router.scss';
import Test from '../test/test';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Test}/>
                    <Route path="/Warehouses" exact component={Test}/>
                    <Route path="/Warehouses/:id" exact component={Test}/>
                    <Route path="/Inventory" exact component={Test}/>
                    <Route path="/Inventory/:id" exact component={Test}/>
                </Switch>
          </BrowserRouter>
        )
    }
}

export default Router;
