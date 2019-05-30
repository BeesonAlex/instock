import React from 'react';
//import { Link } from 'react-router-dom';
import logo from '../../assets/Logo/Logo-instock.svg';
import './header.scss';
import '../../App.scss';

 function Header() {
    return (
        <header>
            <nav className="nav-bar">
                <img className="nav-bar__logo" src={logo} alt=""/>
                <ul className="nav-bar__tabs">
                    <li className="nav-bar__tabs--inventory nav-bar__tabs--current">Inventory</li>
                    <li className="nav-bar__tabs--locations">Locations</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;