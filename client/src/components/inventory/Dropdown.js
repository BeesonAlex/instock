import React from 'react';
import './inventory.scss';
import kebabIcon from '../../assets/Icons/SVG/Icon-kebab-default.svg';
import axios from 'axios';

class Dropdown extends React.Component {
    state = {
        showMenu: false
    }
    showMenu = (event) => {
        event.preventDefault();
        {this.state.showMenu ? this.setState({showMenu: false}) : this.setState({showMenu: true})}    
    }
    removeItem = (event) => {
        event.preventDefault();
        axios.delete(`http://localhost:8080/data/inventory/${this.props.id}`)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        return (
            <div className="dropdown">
                <button className="dropdown__kebab" onClick={this.showMenu} type="button">
                    <img className="dropdown__kebab--icon" src={kebabIcon} alt="kebab icon"/>
                </button>
            {
                this.state.showMenu ? (
                    <div className="dropdown__remove">
                        <button className="dropdown__remove--button" onClick={this.removeItem} type="click">Remove</button>
                    </div>
                ) : ( null )
            }
            </div>
        )
    }
}
export default Dropdown;
