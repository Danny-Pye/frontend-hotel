import React from 'react';
import './NavItem.scss';

const NavItem = (props) => {
    return(
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => props.setIsOpen(!props.isOpen)}>
                {props.icon}
            </a>

            {props.isOpen && props.children}
        </li>
    );
}

export default NavItem;