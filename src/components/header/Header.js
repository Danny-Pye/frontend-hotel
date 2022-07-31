import React from 'react';
import './Header.scss'
import logoImg from '../../images/kisspng-react-logo-javascript-front-and-back-ends-user-int-5afef575c096e1.8015139215266584217889.png';

const Header = () => {
    return(
        <header className="header">
            <div className="logo-container">
                <img alt="logo of react symbol" src={logoImg} />
            </div>
            <div className="title-container">
                <h1>
                    <span>Fancy Hotel</span>
                    <span>people like it here</span>
                </h1>
                <a href="#" className="btn">Stay with us</a>
            </div>
        </header>
    );
}

export default Header;