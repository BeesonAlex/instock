import React from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom';
import logo from '../../assets/Logo/Logo-instock.svg';
import './header.scss';
import '../../App.scss';

 function Header() {
    return (
        <header>
            <nav className="nav-bar">
                <Link to={"/"}>
                    <img className="nav-bar__logo" src={logo} alt=""/>
                </Link>
                <ul className="nav-bar__tabs">
                    <NavLink to={"/inventory"} activeClassName='nav-bar__tabs--current'>
                        <li className="nav-bar__tabs--inventory">Inventory</li>
                    </NavLink>
                    <NavLink to={"/warehouses"} activeClassName='nav-bar__tabs--current'>
                        <li className="nav-bar__tabs--locations" >Locations</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default withRouter(Header);