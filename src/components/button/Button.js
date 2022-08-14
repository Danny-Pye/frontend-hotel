import React from 'react';
import './Button.scss';

const Button = (props) => {
    return (
        <a href="#" className={`btn btn-${props.btnStyle}`}>Stay with us</a>
    );
}

export default Button;