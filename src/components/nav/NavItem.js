import React from 'react';
import './NavItem.scss';
import DropDown from "./DropDown";

const NavItem = (props) => {
    return(
        <li className="nav-item">
            {!props.isOpen && <a href="#" className="icon-button" onClick={() => props.setIsOpen(!props.isOpen)}>
                {props.icon}
            </a>}

            {props.isOpen && <DropDown isOpen={props.isOpen} setIsOpen={props.setIsOpen} />}
        </li>
    );
}

export default NavItem;