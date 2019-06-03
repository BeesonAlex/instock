import React from 'react';
import './inventory.scss';
import kebabIcon from '../../assets/Icons/SVG/Icon-kebab-default.svg';

class Dropdown extends React.Component {
    state = {
        showMenu: false
    }
    showMenu = (event) => {
        event.preventDefault();
        this.state.showMenu ? this.setState({showMenu: false}) : this.setState({showMenu: true})}    
    

    render() {
        return (
            <div className="dropdown">
                <button className="dropdown__kebab" onClick={this.showMenu} type="button">
                    <img className="dropdown__kebab--icon" src={kebabIcon} alt="kebab icon"/>
                </button>
            {
                this.state.showMenu ? (
                    <div className="dropdown__remove">
                        <button className="dropdown__remove--button" type="click" onClick={()=>{this.props.removeItem(this.props.id)}}>Remove</button>
                    </div>
                ) : ( null )
            }
            </div>
        )
    }
}
export default Dropdown;
