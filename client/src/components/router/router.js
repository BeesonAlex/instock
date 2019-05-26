import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './router.scss';
import Test from '../test/test';
import Warehouses from '../warehouses/Warehouses';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Warehouses}/>
                    <Route path="/warehouses" exact component={Warehouses}/>
                    <Route path="/warehouses/:id" exact component={Test}/>
                    <Route path="/inventory" exact component={Test}/>
                    <Route path="/inventory/:id" exact component={Test}/>
                </Switch>
          </BrowserRouter>
        )
    }
}

export default Router;
